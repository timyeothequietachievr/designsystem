# Ghost newsletter stack — setup guide

**Your workflow:** Write in [📣 Content](https://www.notion.so/9f641716da28837eb6e481fad83c190f) → set `Publish Date Newsletter` → set `Status` = **AI Publish Date Set** → n8n creates a **scheduled** Ghost post → Ghost emails subscribers at that time via **Resend** (free tier: ~3k emails/mo).

**After n8n sync:** Notion `Status` → **AI Scheduled**  
**After Ghost publishes:** Notion `Status` → **Published** (Workflow C)

**Email provider:** [Resend](https://resend.com) — native Ghost 6 bulk provider. No Mailgun.

---

## What’s already done

| Item | Status |
|------|--------|
| 📣 Content: `Ghost Post ID`, `Ghost URL` | Added |
| 🤝 CRM: `Ghost Member ID` | Added |
| Site: `POST /api/newsletter/subscribe` | Added (needs env vars) |
| n8n workflow JSON | `infra/ghost-newsletter/n8n/` |
| Block → HTML script | `scripts/notion-blocks-to-html.js` |

**Database IDs** (for n8n): see `config/notion-databases.json`

---

## Phase 1 — Railway (Ghost + MySQL)

You have a Railway account (GitHub login). Do this in the browser:

### 1.1 Deploy template

1. Open https://railway.com/deploy/ghost-cms-mysql  
2. **Deploy Now** → select your Railway project  
3. Wait until **Ghost** and **MySQL** are healthy  
4. Open Ghost service → **Settings → Networking** → note the public URL  

### 1.2 Ghost environment variables

Ghost service → **Variables**. Set (replace placeholders):

```env
url=https://newsletter.thequietachievr.com
NODE_ENV=production
TZ=Australia/Melbourne
```

Use the Railway URL for `url` until DNS is ready, then switch to the custom domain.

**Resend SMTP** (transactional: magic links, invites — optional if configured in Ghost admin):

```env
mail__transport=SMTP
mail__options__host=smtp.resend.com
mail__options__port=465
mail__options__secure=true
mail__options__auth__user=resend
mail__options__auth__pass=re_YOUR_RESEND_API_KEY
mail__from=tim@thequietachievr.com
```

**Newsletter (bulk):** configure Resend API key in Ghost Admin → **Settings → Email newsletter → Resend** (not env vars).

**R2 storage:** skip until Phase 7 (use Dockerfile in this folder).

### 1.3 First-run Ghost admin

1. Visit `https://YOUR_RAILWAY_URL/ghost`  
2. Create owner account  
3. **Settings → Publication details** → timezone **Australia/Melbourne**  
4. **Settings → Membership** → enable free signups  

### 1.4 Custom domain

1. Ghost service → **Networking → Custom Domain** → `newsletter.thequietachievr.com`  
2. Add DNS **CNAME** at your registrar (Railway shows the target)  
3. Update `url` to `https://newsletter.thequietachievr.com`  
4. Redeploy if needed  

### 1.5 Ghost integrations (for n8n)

**Settings → Integrations → Add custom integration** → name `n8n`

Copy:

- Admin API URL  
- Admin API Key (`id:secret`)  
- Content API Key  

Add webhook **Member added** → `https://YOUR_N8N.app.n8n.cloud/webhook/ghost-new-subscriber`  
Add webhook **Post published** → `https://YOUR_N8N.app.n8n.cloud/webhook/ghost-post-published`

---

## Phase 2 — Resend (free tier)

1. https://resend.com → sign up (GitHub is fine)  
2. **Domains** → add `thequietachievr.com`  
3. Add DNS records Resend shows (SPF + DKIM — usually 2–3 records at your registrar)  
4. Wait until domain status is **Verified**  
5. **API Keys** → create key named `ghost-newsletter` → copy `re_...`

**Ghost newsletter (bulk):**  
Ghost Admin → **Settings → Email newsletter → Resend** → paste API key  

**Ghost transactional (optional):** same key via SMTP env vars on Railway (see Phase 1.2) or Resend card in Ghost.

**n8n drips (Workflow D):** Resend credential with same API key.

Send a test newsletter to yourself before migrating ConvertKit.

---

## Phase 3 — Notion integration

1. https://www.notion.so/my-integrations → **New integration** → `n8n automation`  
2. Copy **Internal Integration Token**  
3. Open [📣 Content](https://www.notion.so/9f641716da28837eb6e481fad83c190f) → **⋯ → Connections** → connect integration  
4. Same for [🤝 CRM](https://www.notion.so/c5441716da28820393c9812a85364740)  

---

## Phase 4 — n8n Cloud

### 4.1 Credentials

| Credential | Values |
|------------|--------|
| **Notion API** | Integration token |
| **Ghost Admin API** | URL + Admin API key from Phase 1.5 |
| **Resend API** | API key `re_...` (Workflow D drips) |

### 4.2 Variables (Settings → Variables)

```
GHOST_URL=https://newsletter.thequietachievr.com
NOTION_CONTENT_DB_ID=9f641716da28837eb6e481fad83c190f
NOTION_CRM_DB_ID=c5441716da28820393c9812a85364740
```

### 4.3 Import workflows

1. n8n → **Workflows → Import from file**  
2. Import each file from `n8n/`:
   - `workflow-a-ghost-subscriber-to-crm.json`
   - `workflow-b-notion-to-ghost-scheduled.json`
   - `workflow-c-ghost-published-to-notion.json`
3. Assign credentials on each Notion/Ghost node  
4. **Activate** workflows A and C (webhooks). Activate B after a test row.

### 4.4 Workflow B — pickup rules (confirmed)

n8n queries 📣 Content where:

- `Status` = **AI Publish Date Set**
- `Publish Date Newsletter` is not empty (any content type — schedules as a Ghost newsletter when this date is set)
- `Ghost Post ID` is empty

Then:

1. `GET /v1/blocks/{page_id}/children` (Notion) — paginate if needed  
2. Code node — paste `scripts/notion-blocks-to-html.js`  
3. `POST /ghost/api/admin/posts/` with body (see `scripts/ghost-scheduled-post-body.example.json`)  
   - `published_at` = **Publish Date Newsletter** converted to UTC ISO  
   - `status` = `scheduled`  
4. Update Notion: `Ghost Post ID`, `Ghost URL`, `Status` = **AI Scheduled**

**Melbourne → UTC:** use n8n **Date & Time** node, timezone `Australia/Melbourne`.

### 4.5 Test Workflow B

1. Create a test row in 📣 Content (DRAFT NEWSLETTER template)  
2. Short body in the page  
3. `Publish Date Newsletter` = 10 minutes from now  
4. `Status` = **AI Publish Date Set**  
5. Run workflow manually → check Ghost **Posts** (scheduled) and Notion fields  

---

## Phase 5 — Vercel / site env

On the designsystem site (or main marketing site), set:

```env
GHOST_URL=https://newsletter.thequietachievr.com
GHOST_ADMIN_API_KEY=your_id:your_secret
```

Redeploy. Test the newsletter band → `POST /api/newsletter/subscribe`.

---

## Phase 6 — ConvertKit migration (last)

1. ConvertKit → export subscribers CSV  
2. Ghost → import members  
3. n8n one-off: CSV → 🤝 CRM (match on Email)  
4. Send “we’ve moved” issue from Ghost  
5. Cancel ConvertKit only after test broadcast + unsubscribes work  

---

## Phase 7 — R2 media (optional)

1. Create GitHub repo `ghost-newsletter` with this `Dockerfile`  
2. Railway Ghost service → connect repo → deploy  
3. Add R2 env vars (see `.env.example`)  
4. Prefix uploads: `ghost/` inside bucket `postiz-cloudflare`  

---

## Verification checklist

- [ ] Ghost admin loads at `/ghost`  
- [ ] Resend domain verified + API key in Ghost  
- [ ] Test newsletter delivers to inbox  
- [ ] Workflow B: AI Publish Date Set → Ghost scheduled + Notion AI Scheduled  
- [ ] At publish time: email sends + Workflow C sets Published  
- [ ] Workflow A: portal signup → CRM row with Ghost Member ID  
- [ ] Site signup form creates Ghost member  

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| n8n doesn’t pick up row | Status must be exactly **AI Publish Date Set**; Ghost Post ID must be empty |
| Wrong send time | Check `Publish Date Newsletter` includes time; n8n converts Melbourne → UTC |
| Empty email body | Notion body is in page blocks — ensure Code node runs on blocks API output |
| Ghost 422 on subscribe | Member may already exist — API treats as success on site |
| Newsletter didn’t send | Ghost → Resend connected in Email newsletter settings; post has email enabled |

---

## Support files

- `config/notion-databases.json` — IDs and status names  
- `scripts/ghost-scheduled-post-body.example.json` — Ghost API payload  
- `scripts/notion-blocks-to-html.js` — n8n Code node  
- `n8n/README.md` — workflow-specific notes  
