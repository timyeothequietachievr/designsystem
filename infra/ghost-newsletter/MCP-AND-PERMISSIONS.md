# Permissions needed to finish hands-on setup

The repo contains all code, n8n JSON exports, and Notion schema. These steps need **your accounts** — grant what you can below.

## Already done (no permission needed)

- Notion CRM: `Newsletter tags`, `Email sequence`, `Sequence stage`, `Sequence started`, `Last sequence email`, `Ghost Member ID`
- Notion Content: `Ghost Post ID`, `Ghost URL`
- Site: `/api/newsletter/subscribe`, `/api/go/[interest]`, `/api/admin/newsletter/link`
- n8n workflow JSON files in `n8n/`

---

## Grant these so the agent can finish

### 1. Shell — `all` + `full_network`

Used to:

- Install and run `npm i -g @railway/cli` and `npm i -g vercel`
- Deploy Ghost template if `RAILWAY_TOKEN` is in environment
- Set Vercel env vars if `VERCEL_TOKEN` is in environment
- Run `scripts/generate-tracking-link.mjs`

**Private keys for the agent:** use the **`newsletter`** project at `/Users/ymmit/Projects/newsletter/`:

```bash
cp /Users/ymmit/Projects/newsletter/.env.example /Users/ymmit/Projects/newsletter/.env.local
# Edit .env.local — add RESEND_API_KEY, GHOST_ADMIN_API_KEY, etc.
```

Do not paste keys in chat. See `newsletter/.cursor/rules/private-env.mdc`.

### 2. Browser MCP — logged-in sessions

Used to click through UIs the CLI cannot access:

| Service | URL | Tasks |
|---------|-----|--------|
| Railway | https://railway.com | Deploy Ghost+MySQL template, set env vars, custom domain |
| Resend | https://resend.com | Add domain, DNS records, API key |
| Ghost | `https://…/ghost` | Setup wizard, Resend newsletter, n8n integration + webhooks |
| n8n Cloud | https://app.n8n.cloud | Import workflows, set credentials, activate |
| Vercel | https://vercel.com | Project env vars if no CLI token |

**You must be logged in** to each in the browser Cursor uses before the agent runs.

### 3. Notion MCP — already connected

Used for runbook pages and CRM tweaks. No extra grant if Notion plugin is enabled.

### 4. MCPs that do **not** exist yet (optional)

If you install these later, say so and the agent can use them:

- **Railway MCP** — none in Cursor marketplace today; CLI or browser only
- **n8n MCP** — none standard; browser or REST API with `N8N_API_KEY`
- **Resend MCP** — none standard; browser or API key in shell

---

## What the agent will do after you grant shell + browser

1. Deploy Ghost on Railway (or confirm existing deploy)
2. Configure Resend + Ghost newsletter connection
3. Import and activate all n8n workflows
4. Set Vercel env vars on the marketing site project
5. Run end-to-end test: Notion row → Ghost scheduled → click link → CRM tags → drip
6. Create Notion runbook page under Revamp with live URLs

---

## One-message grant (copy to agent)

> Grant shell `all` + `full_network`. Browser MCP is on — I'm logged into Railway, Resend, n8n, and Vercel. Proceed with full setup.
