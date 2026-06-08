# What the agent can set up vs what needs your MCP / login

## Already done (no login required)

| Done | Where |
|------|--------|
| 🤝 CRM fields: Newsletter tags, Email sequence, Sequence stage, dates, Ghost Member ID | Notion |
| 📣 Content: Ghost Post ID, Ghost URL | Notion |
| Click → tag → sequence API | `GET /api/go/{courses\|coaching\|book\|playbooks}` |
| Link generator API | `POST /api/admin/newsletter/link` |
| CLI link generator | `node scripts/generate-tracking-link.mjs` |
| n8n workflow JSON (A–D) | `infra/ghost-newsletter/n8n/` |
| Drip email HTML stubs | `infra/ghost-newsletter/email-templates/` |
| Full setup guide | `SETUP.md`, `TAGS-AND-SEQUENCES.md` |

## Cannot be done without your accounts

These have **no MCP connected** in this workspace today:

| Service | What’s needed | How you unblock the agent |
|---------|----------------|-------------------------|
| **Railway** | Deploy Ghost + MySQL | Install [Railway MCP](https://railway.com) if available, or run deploy yourself once using `SETUP.md` Phase 1 |
| **n8n Cloud** | Import workflows, add credentials | n8n MCP or paste API key; otherwise import JSON manually (15 min) |
| **Resend** | Domain DNS + API key | Resend dashboard or add keys to Ghost/n8n yourself |
| **Ghost admin** | Wizard, Resend, webhooks | Browser MCP with you logged in, or you complete Phase 1–2 |
| **Vercel** | Env vars on production site | Vercel dashboard or plugin (current Vercel MCP has no env-var tool) |

## Env vars to add (Vercel + local)

```env
GHOST_URL=https://newsletter.thequietachievr.com
GHOST_ADMIN_API_KEY=id:secret
NOTION_INTEGRATION_TOKEN=secret
NEWSLETTER_TRACKING_SECRET=long-random-string
NEWSLETTER_ADMIN_SECRET=another-long-random-string
SITE_URL=https://thequietachievr.com
```

Generate secrets:

```bash
openssl rand -hex 32
```

## Recommended MCPs to enable (so the agent can finish “manual” setup)

1. **Notion** — already connected ✓  
2. **Vercel** — connected; limited (deploy/logs, not env vars)  
3. **Railway** — if you add it, agent can deploy Ghost template  
4. **Browser** — agent can click through Railway/Ghost/n8n with you logged in  

## One 30-minute session with you

If you stay logged into Railway, n8n, and Ghost in Chrome, ask the agent to:

> “Use the browser to deploy Ghost on Railway and import n8n workflows”

With **cursor-ide-browser** MCP, the agent can drive the UI while you approve DNS/Resend separately at your registrar.

## Notion runbook page

See **Newsletter automation runbook** under your Revamp project in Notion (created by the agent).
