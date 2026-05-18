# Website UI Kit — The Quiet Achiever

Recreates the marketing site at `thequietachievr.com`. Source: [`timyeothequietachievr/website`](https://github.com/timyeothequietachievr/website) (Next.js + Tailwind v2).

## What's here

- **`index.html`** — interactive homepage recreation: nav → masthead → book hero → intro band → topics grid → testimonial → feature → pricing → footer. Click through the pricing cards and the mobile menu.
- **Components** (inline JSX inside `index.html`):
  - `Navigation` — white top bar with centered links + login pill
  - `Masthead` — lowercase hero headline with indigo accents
  - `BookHero` — two-column hero with rounded-xl image
  - `IntroBand` — the signature indigo mix-blend-multiply band
  - `TopicsGrid` — rounded-2xl image tiles
  - `TestimonialLargeAvatar` — round avatar + dot grid + indigo quote mark
  - `Feature` — two-column feature section
  - `PricingCard` + `PricingGroup` — card with badge, check-list, primary CTA
  - `SpeakersGrid` — 3-column speaker grid
  - `Footer` — 4-column links + social icons row
  - `Button`, `Container`, `Section` primitives

All components map to real files in `/components/` in the source repo.

## Known simplifications

- Images are solid-color or gradient placeholders since the site's `src/*.jpg` files are not in the public repo (they live on the production server).
- Pricing is static; the real site has currency switcher + Stripe integration.
- Only the homepage is recreated. `/coaching`, `/book`, `/about`, `/podcast`, `/school` are identical in pattern — same nav, same masthead shape, same hero + feature + pricing blocks.
