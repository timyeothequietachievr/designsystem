# n8n workflows

Import these into **n8n Cloud** (Starter from Lenny pass). **Workflow B is live:** https://thequietachievr.app.n8n.cloud/workflow/412thrwBgvgGDWPO — attach **Notion API** on *Get page blocks* and **Ghost Admin API** on *Create scheduled post*, then Publish.

SDK source: `workflow-b-sdk.generated.js` (deploy via n8n MCP `create_workflow_from_code`).

## Workflows

| File | Trigger | Purpose |
|------|---------|---------|
| `workflow-a-ghost-subscriber-to-crm.json` | Webhook `POST /ghost-new-subscriber` | New Ghost member → 🤝 CRM (dedupe by Email) |
| `workflow-b-notion-to-ghost-scheduled.json` | Every 15 minutes | **AI Publish Date Set** → Ghost scheduled post → **AI Scheduled** |
| `workflow-c-ghost-published-to-notion.json` | Webhook `POST /ghost-post-published` | Ghost published → Notion **Published** + URLs |
| `workflow-d-sdk.generated.js` | Daily 9am Melbourne | **Live:** [CRM drip campaigns](https://thequietachievr.app.n8n.cloud/workflow/IhnSto3eefj2poXU) — reads 📭 Email Campaigns + 📬 Campaign Steps |
| `workflow-d-daily-drip.json` | (legacy stub) | Replaced by SDK workflow above |

**Click → tag** is handled by the website (`/api/go/{interest}`), not n8n — see `src/app/api/go/`.

## Workflow B — manual tweaks after import

1. **Notion → Database Page** filter:
   - Status equals `AI Publish Date Set`
   - Ghost Post ID is empty
   - Publish Date Newsletter is not empty (any content type — schedule as newsletter when this date is set)

2. **HTTP Request** — Get blocks:  
   `GET https://api.notion.com/v1/blocks/{{ $json.id }}/children`

3. **Code** — paste full contents of `../scripts/notion-blocks-to-html.js`

4. **HTTP Request** — Create Ghost post (or Ghost node **Create**):
   - URL: `{{ $env.GHOST_URL }}/ghost/api/admin/posts/?source=html`
   - Auth: Ghost Admin API credential
   - Body: see `../scripts/ghost-scheduled-post-body.example.json`
   - Map `published_at` from Notion `Publish Date Newsletter` via Date & Time node (Australia/Melbourne → UTC)

5. **Notion → Update** page:
   - Ghost Post ID ← `{{ $json.posts[0].id }}`
   - Ghost URL ← `{{ $json.posts[0].url }}`
   - Status ← `AI Scheduled`

## Ghost webhooks (admin)

Register in Ghost integration:

- `member.added` → `https://<instance>.app.n8n.cloud/webhook/ghost-new-subscriber`
- `post.published` → `https://<instance>.app.n8n.cloud/webhook/ghost-post-published`

Use the **Production** webhook URL from n8n after activating workflows A and C.
