import { workflow, trigger, node, splitInBatches, nextBatch, expr, newCredential } from '@n8n/workflow-sdk';

const GHOST_URL = 'https://ghost-production-6938.up.railway.app';

const every15 = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: '1.3',
  config: {
    name: 'Every 15 minutes',
    parameters: {
      rule: { interval: [{ field: 'minutes', minutesInterval: 15 }] },
    },
    position: [0, 0],
  },
  output: [{}],
});

const pickup = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Pickup AI Publish Date Set',
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      authentication: 'oAuth2',
      databaseId: { __rl: true, value: '9f641716da28837eb6e481fad83c190f', mode: 'id' },
      filterType: 'manual',
      matchType: 'allFilters',
      filters: {
        conditions: [
          { key: 'Status|status', condition: 'equals', statusValue: 'AI Publish Date Set' },
          { key: 'Ghost Post ID|rich_text', condition: 'is_empty' },
          { key: 'Publish Date Newsletter|date', condition: 'is_not_empty' },
        ],
      },
      returnAll: true,
      options: {},
    },
    position: [220, 0],
  },
  output: [{ id: 'page-1', property_content_title: 'Test Newsletter', property_publish_date_newsletter: { start: '2026-06-01T09:00:00.000+10:00' } }],
});

const eachRow = splitInBatches({
  version: '3',
  config: {
    name: 'Each row',
    parameters: { batchSize: 1 },
    position: [440, 0],
  },
});

const getBlocks = node({
  type: 'n8n-nodes-base.httpRequest',
  version: '4.4',
  config: {
    name: 'Get page blocks',
    parameters: {
      method: 'GET',
      url: expr('{{ "https://api.notion.com/v1/blocks/" + $json.id + "/children" }}'),
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'notionApi',
      options: {},
    },
    position: [660, 0],
    credentials: { notionApi: newCredential('Notion API') },
  },
  output: [{ results: [{ type: 'paragraph', paragraph: { rich_text: [{ plain_text: 'Hello' }] } }] }],
});

const blocksToHtml = node({
  type: 'n8n-nodes-base.code',
  version: '2',
  config: {
    name: 'Blocks to HTML',
    parameters: {
      mode: 'runOnceForAllItems',
      jsCode: `const blocks = $input.first().json.results ?? $input.first().json;

function richTextToHtml(richText = []) {
  return richText
    .map((t) => {
      let s = escapeHtml(t.plain_text ?? "");
      if (t.annotations?.bold) s = \`<strong>${s}</strong>\`;
      if (t.annotations?.italic) s = \`<em>${s}</em>\`;
      if (t.href) s = \`<a href="${escapeHtml(t.href)}">${s}</a>\`;
      return s;
    })
    .join("");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function blockToHtml(block) {
  const type = block.type;
  const data = block[type] ?? {};

  switch (type) {
    case "paragraph":
      return \`<p>${richTextToHtml(data.rich_text)}</p>\`;
    case "heading_1":
      return \`<h1>${richTextToHtml(data.rich_text)}</h1>\`;
    case "heading_2":
      return \`<h2>${richTextToHtml(data.rich_text)}</h2>\`;
    case "heading_3":
      return \`<h3>${richTextToHtml(data.rich_text)}</h3>\`;
    case "bulleted_list_item":
      return \`<li>${richTextToHtml(data.rich_text)}</li>\`;
    case "numbered_list_item":
      return \`<li>${richTextToHtml(data.rich_text)}</li>\`;
    case "quote":
      return \`<blockquote>${richTextToHtml(data.rich_text)}</blockquote>\`;
    case "divider":
      return "<hr />";
    case "image": {
      const url = data.file?.external?.url ?? data.file?.file?.url ?? data.external?.url;
      const caption = richTextToHtml(data.caption);
      if (!url) return "";
      return \`<figure><img src="\${escapeHtml(url)}" alt="" />\${caption ? \`<figcaption>\${caption}</figcaption>\` : ""}</figure>\`;
    }
    default:
      return data.rich_text ? \`<p>${richTextToHtml(data.rich_text)}</p>\` : "";
  }
}

const list = Array.isArray(blocks) ? blocks : [];
const parts = [];
let inList = false;

for (const block of list) {
  const t = block.type;
  const isLi = t === "bulleted_list_item" || t === "numbered_list_item";
  if (isLi && !inList) {
    parts.push(t === "numbered_list_item" ? "<ol>" : "<ul>");
    inList = true;
  }
  if (!isLi && inList) {
    parts.push("</ul>");
    inList = false;
  }
  if (!isLi) parts.push(blockToHtml(block));
  else parts.push(blockToHtml(block));
}
if (inList) parts.push("</ul>");

const html = parts.join('\n');
const plainText = list
  .map((b) => (b[b.type]?.rich_text ?? []).map((r) => r.plain_text).join(""))
  .filter(Boolean)
  .join('\n\n');

const page = $('Each row').item.json;
const title = page.property_content_title ?? page.name ?? 'Newsletter';
const publishStart = page.property_publish_date_newsletter?.start ?? page.property_publish_date_newsletter ?? '';
return [{ json: { html, plainText, title, publishStart, pageId: page.id } }];`,
    },
    position: [880, 0],
  },
  output: [{ json: { html: '<p>Hello</p>', title: 'Test', publishStart: '2026-06-01T09:00:00.000+10:00', pageId: 'page-1' } }],
});

const melbourneToUtc = node({
  type: 'n8n-nodes-base.dateTime',
  version: '2',
  config: {
    name: 'Melbourne to UTC ISO',
    parameters: {
      operation: 'formatDate',
      date: expr('{{ $json.publishStart }}'),
      format: 'custom',
      customFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      options: { timezone: 'Australia/Melbourne' },
    },
    position: [1100, 0],
  },
  output: [{ data: '2026-05-31T23:00:00.000Z' }],
});

const createScheduledPost = node({
  type: 'n8n-nodes-base.httpRequest',
  version: '4.4',
  config: {
    name: 'Create scheduled post',
    parameters: {
      method: 'POST',
      url: `${GHOST_URL}/ghost/api/admin/posts/?source=html`,
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'ghostAdminApi',
      sendBody: true,
      specifyBody: 'json',
      jsonBody: expr("={{ JSON.stringify({ posts: [{ title: $('Blocks to HTML').item.json.title, html: $('Blocks to HTML').item.json.html, status: 'scheduled', published_at: $json.data, visibility: 'public', email_segment: 'all' }] }) }}"),
      options: {},
    },
    position: [1320, 0],
    credentials: { ghostAdminApi: newCredential('Ghost Admin API') },
  },
  output: [{ posts: [{ id: 'ghost-post-1', url: 'https://ghost.example.com/p/1/' }] }],
});

const markScheduled = node({
  type: 'n8n-nodes-base.notion',
  version: '2.2',
  config: {
    name: 'Mark AI Scheduled',
    parameters: {
      resource: 'databasePage',
      operation: 'update',
      authentication: 'oAuth2',
      pageId: { __rl: true, value: expr("{{ $('Blocks to HTML').item.json.pageId }}"), mode: 'id' },
      propertiesUi: {
        propertyValues: [
          { key: 'Ghost Post ID|rich_text', textContent: expr('{{ $json.posts[0].id }}') },
          { key: 'Ghost URL|url', urlValue: expr('{{ $json.posts[0].url }}') },
          { key: 'Status|status', statusValue: 'AI Scheduled' },
        ],
      },
      options: {},
    },
    position: [1540, 0],
  },
  output: [{ id: 'page-1' }],
});

export default workflow('notion-ghost-scheduled-b', 'Notion Content → Ghost scheduled (Publish Date Newsletter)')
  .add(every15)
  .to(pickup)
  .to(eachRow.onEachBatch(
    getBlocks
      .to(blocksToHtml)
      .to(melbourneToUtc)
      .to(createScheduledPost)
      .to(markScheduled)
      .to(nextBatch(eachRow))
  ));
