# The Quiet Achiever Design System

This file documents the reusable design system for building new pages, tools,
landing pages, product pages, and experiments for The Quiet Achiever.

## Where Things Live

- Brand tokens and fonts: `src/app/globals.css`
- Core primitives: `src/components/revamp/primitives.tsx`
- Production homepage sections: `src/components/revamp/`
- Book-specific components: `src/components/book/`
- Tailwind UI converted blocks: `src/components/tailwind-showcase/blocks/`
- Tailwind source kits: `design/components/`
- Component registry: `src/components/tailwind-showcase/registry.ts`
- Stable component catalog: `src/lib/component-catalog.ts` and `public/component-catalog.json`
- Visual browser: `/visual-library`
- Design system page: `/` and `/design-system`
- Individual previews: `/preview/cXXX`

## Brand Tokens

Use the Tailwind theme tokens defined in `src/app/globals.css`.

### Colors

- `ember` / `#D54A2F`: primary CTAs, important accents, active states.
- `ember-deep` / `#8A2A1C`: hover states and deeper emphasis.
- `sunrise` / `#E5A402`: highlight color, star ratings, warm accent moments.
- `sunrise-soft` / `#F5C84B`: softer highlight backgrounds and gradients.
- `ink` / `#2B2B52`: dark panels, secondary CTAs, deep contrast modules.
- `ink-deep` / `#1A1A3A`: deepest panels and hero backgrounds.
- `paper` / `#F5F0D3`: main page background.
- `paper-soft` / `#FAF6E1`: alternating section background and cards.
- `charcoal` / `#1E1E1E`: headings and primary text.
- `warm-500` / `#8A8572`: secondary labels and muted metadata.
- `warm-700` / `#4A4638`: body copy.

### Typography

- `font-display`: Literata. Use for headlines, section titles, quote bands,
  large numbers, and editorial statements.
- `font-sans`: Basier Circle. Use for navigation, CTAs, labels, form fields,
  and UI text.
- `font-reading`: Atkinson Hyperlegible. Use for body copy, testimonials,
  long-form explanations, FAQ answers, and reader-friendly text.
- `font-mono`: system mono. Use sparingly for eyebrows, component labels,
  metadata, and technical notes.

## Core Primitives

Import from `src/components/revamp/primitives.tsx`.

```tsx
import {
  Container,
  Button,
  Eyebrow,
  SectionLabel,
  PainterPlaceholder,
} from "@/components/revamp/primitives";
```

### Container

Use `Container` for nearly every section. Use `wide` for immersive heroes,
visual-library canvases, and large grid showcases.

### Button

Use the shared `Button` component for CTAs.

- `primary`: main conversion actions.
- `secondary`: outlined secondary actions.
- `ghost`: text links that need button spacing.
- `cream`: light button on dark backgrounds.
- `ink`: dark button on light backgrounds.

### Eyebrow

Use for small uppercase section labels. Avoid using decorative labels on the
public homepage where the user has asked for a cleaner page.

### SectionLabel

Use for internal component libraries, visual-library views, and component
cataloguing. Avoid on final public pages unless the numbered aesthetic is
intentional.

### PainterPlaceholder

Use as a branded placeholder for missing course, product, or testimonial art.
Replace with real imagery when available.

## Production Sections

Homepage sections live in `src/components/revamp/`.

- `navigation.tsx`: top navigation and mobile menu.
- `hero.tsx`: homepage hero variants.
- `sections-1.tsx`: trust strip, work-together cards, testimonials, Tim story,
  thesis band.
- `sections-2.tsx`: coaching, Toni, book, reader quote.
- `sections-3.tsx`: school, free learning, playbooks, newsletter, elsewhere,
  footer, floating Toni bubble.

Book page sections live in `src/components/book/`.

- `book-masthead.tsx`: simple book-page nav.
- `book-logo-cloud-c148.tsx`: trusted-by logo cloud.
- `book-sound-familiar-c6.tsx`: pain-point checklist.
- `book-landing-page.tsx`: full book page assembly.

## Tailwind UI Kits

The repo stores three Tailwind UI kits under `design/components/`:

- `tailwind-marketing-v4`
- `application-ui-v4`
- `ecommerce-v4`

The source React `.jsx` files are converted into TQA-styled `.tsx` blocks under
`src/components/tailwind-showcase/blocks/` by:

```bash
npm run build:tailwind-showcase
```

This command:

1. Reads source files from `design/components/*/react`.
2. Recolors common Tailwind classes to TQA tokens.
3. Writes generated blocks to `src/components/tailwind-showcase/blocks/`.
4. Rebuilds `src/components/tailwind-showcase/registry.ts`.
5. Regenerates `public/component-catalog.json`.

Do not hand-edit generated files in `src/components/tailwind-showcase/blocks/`.
If a generated component needs permanent treatment, either:

- update `scripts/build-tailwind-showcase.mjs`, or
- copy the block into a product-specific component folder and adapt it there.

## Component Catalog

The component catalog gives stable-ish IDs for selection and preview.

- `c1` to `c17`: TQA revamp components.
- `c18+`: Tailwind UI blocks.
- `/preview/cXXX`: isolated preview route.
- `/visual-library`: full browseable visual library.
- `/component-catalog.json`: generated data for tooling and Notion references.

After adding or changing generated components, run:

```bash
npm run generate:component-catalog
```

Or run the full conversion:

```bash
npm run build:tailwind-showcase
```

## Build Rules

When building new things:

1. Start with an existing section or Tailwind block.
2. Use TQA tokens from `globals.css`.
3. Use `Container` for layout.
4. Use `Button` for CTAs.
5. Use `font-display` for big emotional claims.
6. Use `font-reading` for paragraphs and testimonials.
7. Prefer warm paper backgrounds over stark white.
8. Use ember for primary action, ink for structure, sunrise for highlights.
9. Avoid black text on dark/blue backgrounds unless contrast is checked.
10. Keep the design system public and dependency-light so it is easy to reuse.

## Page Checklist

Before a new page ships:

- It uses shared fonts and colors.
- It has responsive mobile navigation or a clear path back.
- It has at least one clear primary CTA.
- Links and buttons are real anchors/buttons, not inert divs.
- Long body copy uses `font-reading`.
- Images have useful alt text.
- Missing images use branded placeholders.
- Page-specific forms do not expose private input values to analytics.
- `npm run build` passes.

## Current Local Routes

- Design system: `/`
- Visual library: `/visual-library`
- Design system alias: `/design-system`
- Component preview: `/preview/cXXX`
