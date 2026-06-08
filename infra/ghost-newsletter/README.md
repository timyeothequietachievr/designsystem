# Ghost newsletter infrastructure

Self-hosted Ghost on Railway + Notion 📣 Content + 🤝 CRM + n8n automation.

**Start here:** [SETUP.md](./SETUP.md)

## Quick links

- Notion Content: https://www.notion.so/9f641716da28837eb6e481fad83c190f
- Notion CRM: https://www.notion.so/c5441716da28820393c9812a85364740
- Railway template: https://railway.com/deploy/ghost-cms-mysql
- n8n workflows: [n8n/](./n8n/)

## Your automation gate

Set **Status** = `AI Publish Date Set` and **Publish Date Newsletter** → n8n schedules Ghost → **AI Scheduled** → Ghost sends at that datetime.
