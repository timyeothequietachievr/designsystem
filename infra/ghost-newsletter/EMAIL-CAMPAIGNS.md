# Email campaigns (Notion-driven)

## Databases

| Database | URL | Purpose |
|----------|-----|---------|
| [📭 Email Campaigns](https://www.notion.so/36b41716da288011acfadfd6c63c6d17) | Campaign definitions | |
| [📬 Campaign Steps](https://www.notion.so/fc820a42bd5148c3989b840171d3b8c8) | Per-email schedule + template | |
| [🤝 CRM](https://www.notion.so/c5441716da28820393c9812a85364740) | Per-person enrollment | |

## Campaign types

**Broadcast** — one send time for everyone. Use [📣 Content](https://www.notion.so/9f641716da28837eb6e481fad83c190f) + **Workflow B** (Ghost). Do not use Workflow D.

**Drip** — personal timeline from **Sequence started**. Configure in Email Campaigns + Steps; **Workflow D** sends via Resend daily (9am Melbourne).

## CRM fields (automation)

| Field | Meaning |
|-------|---------|
| **Campaign slug** | Matches Email Campaigns → Slug |
| **Campaign step** | Last completed step number (0 = enrolled) |
| **Sequence started** | Anchor date (Melbourne calendar days) |
| **Sequence stage** | Pending → Email N sent → Complete |

## Starting a drip

| Trigger | How |
|---------|-----|
| `click:book` | Signed link `/api/go/book?...` |
| `click:courses` | `/api/go/courses?...` |
| `download:book` | `POST /api/campaign/start` with `campaignTrigger: "download:book"` |
| `download:playbook-networking` | `POST /api/campaign/start` |

## Editing a campaign

1. Open **Email Campaigns** → edit Slug, Trigger, Active.
2. Open related **Campaign Steps** → change **Days after start**, **Subject**, **Template ID** (file in `email-templates/`).
3. No n8n redeploy needed — Workflow D reads Notion each run.

## n8n credentials (Workflow D)

- **Notion OAuth2 API** — all Notion nodes
- **Resend API** — Header `Authorization: Bearer re_...`
- **Newsletter Admin API** — Header `Authorization: Bearer <NEWSLETTER_ADMIN_SECRET>` (fetches templates from site)

## Site env

```
NOTION_INTEGRATION_TOKEN=
NEWSLETTER_ADMIN_SECRET=
SITE_URL=https://thequietachievr.com
RESEND_API_KEY=  # n8n only
```
