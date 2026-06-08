import { workflow, trigger, node, splitInBatches, nextBatch, ifElse, expr, newCredential } from '@n8n/workflow-sdk';

const SITE_URL = 'https://websitetqa.thequietachievr.com';
const CAMPAIGNS_DB = '36b41716da288011acfadfd6c63c6d17';
const STEPS_DB = 'fc820a42bd5148c3989b840171d3b8c8';
const CRM_DB = 'c5441716da28820393c9812a85364740';

const daily = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: '1.3',
  config: {
    name: 'Daily 9am Melbourne',
    parameters: {
      rule: { interval: [{ triggerAtHour: 9, timezone: 'Australia/Melbourne' }] },
    },
    position: [0, 0],
  },
  output: [{}],
});

const loadCampaigns = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Load drip campaigns',
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      authentication: 'oAuth2',
      databaseId: { __rl: true, value: CAMPAIGNS_DB, mode: 'id' },
      filterType: 'manual',
      matchType: 'allFilters',
      filters: {
        conditions: [
          { key: 'Type|select', condition: 'equals', selectValue: 'Drip' },
          { key: 'Active|checkbox', condition: 'equals', checkboxValue: true },
        ],
      },
      returnAll: true,
      options: {},
    },
    position: [220, 0],
  },
  output: [{ property_slug: 'book-free', property_type: 'Drip' }],
});

const loadSteps = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Load campaign steps',
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      authentication: 'oAuth2',
      databaseId: { __rl: true, value: STEPS_DB, mode: 'id' },
      returnAll: true,
      options: {},
    },
    position: [440, 0],
  },
  output: [{ property_step: 1, property_days_after_start: 0, property_subject: 'Test', property_template_id: 'book-free-1', property_campaign_slug: 'book-free' }],
});

const buildConfig = node({
  type: 'n8n-nodes-base.code',
  version: '2',
  config: {
    name: 'Build campaign config',
    parameters: {
      mode: 'runOnceForAllItems',
      jsCode: `const campaigns = $('Load drip campaigns').all().map((i) => i.json);
const stepsRaw = $('Load campaign steps').all().map((i) => i.json);

const slugByCampaignUrl = {};
const slugByCampaignId = {};
for (const c of campaigns) {
  if (c.url) slugByCampaignUrl[c.url] = (c.property_slug ?? '').trim();
  if (c.id) slugByCampaignId[String(c.id)] = (c.property_slug ?? '').trim();
}

const stepsBySlug = {};
for (const s of stepsRaw) {
  let slug = (s.property_campaign_slug ?? '').trim();
  if (!slug && s.property_campaign) {
    const rel = typeof s.property_campaign === 'string' ? JSON.parse(s.property_campaign) : s.property_campaign;
    const relValue = Array.isArray(rel) ? rel[0] : '';
    slug = slugByCampaignUrl[relValue] ?? slugByCampaignId[relValue] ?? '';
  }
  if (!slug) continue;
  if (!stepsBySlug[slug]) stepsBySlug[slug] = [];
  const stepNum = Number(s.property_step ?? 0);
  const entry = {
    step: stepNum,
    daysAfter: Number(s.property_days_after_start ?? 0),
    subject: s.property_subject ?? '',
    templateId: (s.property_template_id ?? '').trim(),
    ctaInterest: (s.property_cta_interest ?? '').trim(),
  };
  const idx = stepsBySlug[slug].findIndex((e) => e.step === stepNum);
  if (idx === -1) stepsBySlug[slug].push(entry);
  else stepsBySlug[slug][idx] = entry;
}
for (const slug of Object.keys(stepsBySlug)) {
  stepsBySlug[slug].sort((a, b) => a.step - b.step);
}

return [{ json: { stepsBySlug, melbourneToday: new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Melbourne' }) } }];`,
    },
    position: [660, 0],
  },
  output: [{ json: { stepsBySlug: { 'book-free': [{ step: 1, daysAfter: 0, subject: 'Test', templateId: 'book-free-1' }] }, melbourneToday: '2026-05-25' } }],
});

const activeContacts = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Active drip contacts',
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      authentication: 'oAuth2',
      databaseId: { __rl: true, value: CRM_DB, mode: 'id' },
      filterType: 'manual',
      matchType: 'allFilters',
      filters: {
        conditions: [
          { key: 'Campaign slug|rich_text', condition: 'is_not_empty' },
          { key: 'Sequence stage|select', condition: 'does_not_equal', selectValue: 'Complete' },
        ],
      },
      returnAll: true,
      options: {},
    },
    position: [880, 0],
  },
  output: [{
    id: 'crm-1',
    property_email: 'test@example.com',
    property_campaign_slug: 'book-free',
    property_campaign_step: 0,
    property_sequence_started: { start: '2026-05-20' },
    property_ghost_member_id: 'ghost-1',
  }],
});

const eachContact = splitInBatches({
  version: '3',
  config: {
    name: 'Each contact',
    parameters: { batchSize: 1 },
    position: [1100, 0],
  },
});

const planDue = node({
  type: 'n8n-nodes-base.code',
  version: '2',
  config: {
    name: 'Plan due email',
    parameters: {
      mode: 'runOnceForAllItems',
      jsCode: `const config = $('Build campaign config').first().json;
const row = $input.first().json;
const slug = (row.property_campaign_slug ?? '').trim();
const started = row.property_sequence_started?.start ?? row.property_sequence_started ?? '';
const lastStep = Number(row.property_campaign_step ?? 0);
const email = row.property_email;
const memberId = row.property_ghost_member_id;
const pageId = row.id;

if (!slug || !started || !email) return [];

const rawTags = row.property_newsletter_tags ?? [];
const tagNames = Array.isArray(rawTags)
  ? rawTags.map((t) => (typeof t === 'string' ? t : t?.name ?? '')).filter(Boolean)
  : [];
if (tagNames.includes('unsubscribed')) return [];

const steps = config.stepsBySlug[slug] ?? [];
const startDate = String(started).slice(0, 10);
const today = config.melbourneToday;

function addDays(iso, n) {
  const d = new Date(iso + 'T12:00:00.000Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

const due = steps.find((s) => {
  if (s.step <= lastStep) return false;
  return addDays(startDate, s.daysAfter) <= today;
});

if (!due) return [];

const maxStep = Math.max(...steps.map((s) => s.step), 0);
return [{
  json: {
    pageId,
    email,
    memberId,
    slug,
    due,
    subject: due.subject,
    templateId: due.templateId,
    ctaInterest: due.ctaInterest,
    completedStep: due.step,
    isComplete: due.step >= maxStep,
  },
}];`,
    },
    position: [1320, 0],
  },
  output: [{ json: { email: 'test@example.com', templateId: 'book-free-1', subject: 'Test', completedStep: 1, isComplete: false, pageId: 'crm-1' } }],
});

const hasDue = ifElse({
  version: '2.2',
  config: {
    name: 'Due email?',
    parameters: {
      conditions: {
        options: { version: 2, typeValidation: 'loose' },
        combinator: 'and',
        conditions: [
          {
            id: 'has-template',
            leftValue: expr('{{ $json.templateId }}'),
            rightValue: '',
            operator: { type: 'string', operation: 'notEmpty' },
          },
        ],
      },
    },
    position: [1540, 0],
  },
});

const fetchTemplate = node({
  type: 'n8n-nodes-base.httpRequest',
  version: '4.4',
  config: {
    name: 'Fetch email template',
    parameters: {
      method: 'GET',
      url: expr(`={{ "${SITE_URL}/api/internal/drip-template/" + $('Plan due email').item.json.templateId + "?email=" + encodeURIComponent($('Plan due email').item.json.email) + "&memberId=" + encodeURIComponent($('Plan due email').item.json.memberId || "") + "&ctaInterest=" + encodeURIComponent($('Plan due email').item.json.ctaInterest || "") }}`),
      authentication: 'genericCredentialType',
      genericAuthType: 'httpBearerAuth',
      options: { response: { response: { responseFormat: 'json' } } },
    },
    position: [1760, -80],
    credentials: { httpBearerAuth: newCredential('Newsletter Admin Bearer', 'Z4hLk58jMTj53zmI') },
  },
  output: [{ html: '<p>Hi</p>' }],
});

const sendResend = node({
  type: 'n8n-nodes-base.httpRequest',
  version: '4.4',
  config: {
    name: 'Send via Resend',
    parameters: {
      method: 'POST',
      url: 'https://api.resend.com/emails',
      authentication: 'genericCredentialType',
      genericAuthType: 'httpBearerAuth',
      sendBody: true,
      specifyBody: 'json',
      jsonBody: expr(`={{ JSON.stringify({
        from: 'Tim Yeo <tim@thequietachievr.com>',
        to: [$('Plan due email').item.json.email],
        subject: $('Plan due email').item.json.subject,
        html: $json.html,
      }) }}`),
      options: {},
    },
    position: [1980, -80],
    credentials: { httpBearerAuth: newCredential('Resend API Key', '8pccTUsBz6F5YkHX') },
  },
  output: [{ id: 'resend-1' }],
});

const advanceCrm = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Advance campaign step',
    parameters: {
      resource: 'databasePage',
      operation: 'update',
      authentication: 'oAuth2',
      pageId: { __rl: true, value: expr("{{ $('Plan due email').item.json.pageId }}"), mode: 'id' },
      propertiesUi: {
        propertyValues: [
          { key: 'Campaign step|number', numberValue: expr('{{ $("Plan due email").item.json.completedStep }}') },
          {
            key: 'Sequence stage|select',
            selectValue: expr('{{ $("Plan due email").item.json.isComplete ? "Complete" : ($("Plan due email").item.json.completedStep === 1 ? "Email 1 sent" : $("Plan due email").item.json.completedStep === 2 ? "Email 2 sent" : "Email 3 sent") }}'),
          },
          { key: 'Last sequence email|date', date: expr('={{ $now.toISODate() }}') },
        ],
      },
      options: {},
    },
    position: [2200, -80],
  },
  output: [{ id: 'crm-1' }],
});

export default workflow('crm-drip-campaigns-d', 'CRM drip campaigns (Notion config, daily)')
  .add(daily)
  .to(loadCampaigns)
  .to(loadSteps)
  .to(buildConfig)
  .to(activeContacts)
  .to(eachContact.onEachBatch(
    planDue
      .to(hasDue.onTrue(
        fetchTemplate.to(sendResend).to(advanceCrm)
      ))
      .to(nextBatch(eachContact))
  ));
