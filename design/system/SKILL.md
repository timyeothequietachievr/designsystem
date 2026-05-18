---
name: quiet-achiever-design
description: Use this skill to generate well-branded interfaces and assets for The Quiet Achiever, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — brand context, content fundamentals, visual foundations, iconography, file index
- `colors_and_type.css` — all tokens as CSS variables; drop this in via `<link rel="stylesheet">`
- `assets/` — logos and brand imagery
- `preview/` — small preview cards for each sub-concept (colors, type, buttons, cards…)
- `ui_kits/website/` — Next.js site recreation with JSX components + interactive index.html

## Default aesthetic in one line

Warm paper-cream surfaces, **ember-red** primary action, **Literata** display serif for headlines (sentence-case, tight leading), **Basier Circle** sans for UI + short body, **Atkinson Hyperlegible** for long-form reading, uppercase/wide-tracked eyebrows, one **ink-navy** band per page with sunrise-yellow accents, painterly solid-color placeholders (no gradients, no textures), hard-cornered buttons (4px), no emoji beyond `▶︎`.

**Fonts are self-hosted in `/fonts/`.** Linking `colors_and_type.css` is enough — the `@font-face` blocks at the top register all three families. Do **not** add Google Fonts `<link>` tags in consumers.
