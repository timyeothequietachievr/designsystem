import { workflow, trigger, node, ifElse, expr, newCredential } from '@n8n/workflow-sdk';

const SITE_URL = 'https://websitetqa.thequietachievr.com';

const ghostWebhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: '2',
  config: {
    name: 'Ghost member.edited',
    parameters: {
      httpMethod: 'POST',
      path: 'ghost-member-unsubscribed',
      responseMode: 'onReceived',
      options: {},
    },
    position: [0, 0],
  },
  output: [{
    body: {
      member: {
        current: { id: 'ghost-1', email: 'test@example.com', newsletters: false },
        previous: { newsletters: true },
      },
    },
  }],
});

const parseUnsubscribe = node({
  type: 'n8n-nodes-base.code',
  version: '2',
  config: {
    name: 'Detect unsubscribe',
    parameters: {
      mode: 'runOnceForAllItems',
      jsCode: `const raw = $input.first().json;
const body = raw.body ?? raw;
const current = body.member?.current;
const previous = body.member?.previous;

if (!current?.email) return [];

const currentNews = current.newsletters;
const previousNews = previous?.newsletters;
const nowUnsubscribed = !Array.isArray(currentNews) || currentNews.length === 0;
const wasSubscribed = Array.isArray(previousNews) && previousNews.length > 0;

if (!nowUnsubscribed) return [];
if (previous && !wasSubscribed) return [];

return [{
  json: {
    email: String(current.email).trim().toLowerCase(),
    ghostMemberId: current.id ?? '',
    source: 'ghost',
  },
}];`,
    },
    position: [220, 0],
  },
  output: [{ json: { email: 'test@example.com', ghostMemberId: 'ghost-1' } }],
});

const isUnsubscribe = ifElse({
  version: '2.2',
  config: {
    name: 'Unsubscribed?',
    parameters: {
      conditions: {
        options: { version: 2, typeValidation: 'loose' },
        combinator: 'and',
        conditions: [
          {
            id: 'has-email',
            leftValue: expr('{{ $json.email }}'),
            rightValue: '',
            operator: { type: 'string', operation: 'notEmpty' },
          },
        ],
      },
    },
    position: [440, 0],
  },
});

const syncOptOut = node({
  type: 'n8n-nodes-base.httpRequest',
  version: '4.4',
  config: {
    name: 'Sync opt-out to site',
    parameters: {
      method: 'POST',
      url: `${SITE_URL}/api/newsletter/opt-out`,
      authentication: 'genericCredentialType',
      genericAuthType: 'httpBearerAuth',
      sendBody: true,
      specifyBody: 'json',
      jsonBody: expr(`={{ JSON.stringify({
        email: $json.email,
        ghostMemberId: $json.ghostMemberId || undefined,
      }) }}`),
      options: {},
    },
    position: [660, -80],
    credentials: { httpBearerAuth: newCredential('Newsletter Admin Bearer', 'Z4hLk58jMTj53zmI') },
  },
  output: [{ ok: true }],
});

export default workflow('ghost-unsubscribe-to-crm', 'Ghost unsubscribe → site opt-out (Notion + EO)')
  .add(ghostWebhook)
  .to(parseUnsubscribe)
  .to(isUnsubscribe.onTrue(syncOptOut));
