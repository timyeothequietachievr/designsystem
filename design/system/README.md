# The Quiet Achiever — Design System

A design system for **The Quiet Achiever** (TQA), an educational brand by Tim Yeo that helps introverts ("quiet achievers") have impact at work without pretending to be extroverts. The brand sells a book, coaching, online courses, a podcast, and a members community.

Tagline: _"tiny habits for quiet achievers to have impact at work without pretending to be extroverts."_

## Products & surfaces

TQA is one brand with one customer-facing surface: **`thequietachievr.com`** — a Next.js marketing + commerce site. The site is content-heavy, sales-oriented, and organized around five product categories:

| Surface | What it is |
|---|---|
| **Book** | _"Being a quiet achiever in a noisy world is hard"_ — eBook, audiobook, paperback, hardcover |
| **Courses** | Cohort-based + self-paced courses (Convince Your Boss, Too Valuable to Lose, Interviews, Public Speaking, etc.) |
| **Coaching** | 1:1 coaching with Tim — free 20-min intro call, then paid engagements |
| **School / Community** | Circle.so-hosted community with monthly guest speakers |
| **Podcast** | Interview podcast featuring introvert leaders |

The UI kit in this design system recreates the marketing website.

## Sources

- **Codebase:** [timyeothequietachievr/website](https://github.com/timyeothequietachievr/website) — Next.js + Tailwind CSS v2. `/components` holds ~130 JSX section components. `tailwind.config.js` defines the brand palette. `public/src/` contains logos.
- **Live site:** https://www.thequietachievr.com
- **Related repos** (not pulled into this system, but exist): `link` (Linktree), `school` (Notion), `30habits30days`, `coaching`, `course`.

Readers without access to the private repo should rely on the exported CSS, components, and assets in this folder.

---

## Content fundamentals

### Voice

**Calm, practical, directly addressing the reader as "you".** The copy is written _to_ a specific person who has been told they're "too quiet" at work. It acknowledges the pain of that experience and offers concrete tactics, not pep talk. The brand never asks you to change who you are — it asks you to practice.

### Lexicon — words the brand owns

- **quiet achiever(s)** — the audience, lowercase when used as a noun inside a sentence. The site title and wordmark drop the final "e" from "achiever" to form **achievr** (the domain, the handle, the wordmark in the logo).
- **tiny habits** — the product mechanism. Always two words, always lowercase.
- **introvert(s)** — used interchangeably with quiet achievers, but "quiet achiever" is preferred on the brand surface.
- **impact at work** — the outcome promise.
- **pretending to be extroverts** — the antagonist.

### Tone and casing

- **Headlines are mostly lowercase.** The masthead reads _"tiny habits for quiet achievers to have impact at work"_ with brand-color highlights on `quiet achievers` and `impact at work`. Title case appears on section headings (`Topics we cover`, `What people are saying`, `Guest speaker interviews`).
- **Sentence case everywhere else.** Buttons: `Buy Now`, `Buy the book`, `Book a Free 20min Call`, `Log in`, `Subscribe`. Navigation items are title case: `School`, `Coaching`, `Book`, `Podcast`, `About`.
- **Contractions are natural.** ("you're", "don't", "I've")
- **"I" vs "you":** Tim speaks in first person only when the frame is personal ("Want to explore coaching with me?"). Product copy is second-person.

### Rhythm — short lines, lots of breathing room

Body copy is broken into very short paragraphs or single-line questions separated by `<br /><br />`. Example from the book hero:

> Do people say "you are too quiet" or "you should speak up more"?
>
> Is small talk and networking awkward for you?
>
> In meetings, do you keep quiet even though you have something to say?
>
> Most quiet achievers struggle in silence, or pretend to be extroverted.
>
> **Life is too short to be living someone else's version of success.**
>
> Stop pretending. Start practicing. Remain your true authentic self.

**Bold sentences** are used as emphasis anchors (usually one per paragraph block), not decorative bold. Italics rarely appear.

### Emoji and iconography in copy

- Emoji are used **sparingly but intentionally** — a single `▶️` on the _Watch Intro_ CTA on the homepage masthead. Do not scatter them.
- Ampersands, em-dashes, and smart quotes appear in the wild alongside straight quotes — consistency isn't policed.
- Exclamation points are almost never used. The brand is deliberately calm.

### Examples to match

- **Section heading:** `Topics we cover`
- **Supporting lede:** `Tiny habits that you put into practice and start having impact at work the very next day. We cover topics like:`
- **Primary CTA label:** `Buy Now` / `Buy the book` / `Book a Free 20min Call`
- **Secondary CTA label:** `▶️ Watch Intro`
- **Login CTA:** `Log in`

---

## Visual foundations

### Palette — drawn from the new book cover

Five named colors do the heavy lifting. The system is painterly and warm; no gradients, no blues-as-primary.

| Token | Hex | Role |
|---|---|---|
| **ember** | `#D54A2F` | Primary action, links, highlight copy |
| **ember-deep** | `#8A2A1C` | Hover, editorial asides, subtitle accent |
| **sunrise** | `#E5A402` | Highlight pen / badge / eyebrow on dark |
| **ink** | `#2B2B52` | Secondary action, dark bands, footer |
| **paper** | `#F5F0D3` | **Default surface** — warm cream, not white |
| charcoal | `#1E1E1E` | Headings on paper |

White is reserved — the default page surface is **paper cream**. The prior Tailwind indigo/gray system has been retired.

### Type

Three brand typefaces. All three are self-hosted from `/fonts/` — **no Google Fonts, no system-sans substitutes.** They're loaded via `@font-face` blocks at the top of `colors_and_type.css`, so anything that links that stylesheet gets them for free.

**Display — Literata** (`--font-display`). Warm editorial serif, variable font covering weights 200–900 with italics. Used for H1/H2, blockquotes, pull quotes, price numbers, and the book title itself. Sentence case, tight leading (.98–1.05), slight negative tracking (-.015 to -.02em). Italics are a deliberate editorial move: subtitles, asides, parentheticals (_"Tiny habits to have impact at work"_).

**Primary sans — Basier Circle** (`--font-sans`). Geometric-humanist sans in 400/500/600/700 + italics. Used for **buttons, nav, eyebrows, bylines, body copy on short passages, form fields, and all UI chrome.** Eyebrows and bylines are **uppercase, wide-tracked (.18em), 700**, echoing the `TIM YEO` treatment on the book cover.

**Reading sans — Atkinson Hyperlegible** (`--font-reading`). Accessibility-forward sans in 400/700 + italics, designed by the Braille Institute for maximum character disambiguation. Used for **long-form reading passages** — the book's voice sections, worksheets, footnotes, captions, and anywhere a reader needs to move through dense copy without visual fatigue. Pair with `line-height: 1.5–1.65`.

| Role | Token | Family | When |
|---|---|---|---|
| Display | `--font-display` | Literata | H1, H2, blockquote, price, pull quote |
| Primary sans | `--font-sans` | Basier Circle | Buttons, nav, eyebrows, UI, short body |
| Reading sans | `--font-reading` | Atkinson Hyperlegible | Long passages, worksheets, captions |

### Layout

- **Max-width 7xl (1280px)**, always horizontally centered with `px-4 sm:px-6 lg:px-8`.
- Sections use **vertical padding `py-12 sm:py-24 lg:py-32`** — generous breathing room is the defining layout trait.
- Two-column hero pattern: copy left, portrait/screenshot right, rounded-xl image with `shadow-xl ring-1 ring-black/5`.
- Grids of 2–3 columns for topics, testimonials, speakers.

### Backgrounds

- **Paper cream (`#F5F0D3`) is the default.** Sections alternate between `paper` and the slightly lighter `paper-soft` (`#FAF6E1`).
- One **ink-navy "intro" band** per page — solid `#2B2B52` with cream text and sunrise-yellow links/eyebrows. This replaces the old indigo mix-blend treatment.
- **No gradients.** No textures. The book cover's painterly quality is suggested via solid blocks of color (sunrise, ember, ink) used as image placeholders.
- A single decorative motif: an oversized display-serif opening quote (`“`) behind testimonials at ~12% ember opacity.

### Imagery

- Warm, candid photos of people (coaching calls, community members, guest speakers). Slight warm cast.
- Book hero is a product shot.
- Round portraits for testimonials and speakers (aspect 1:1 or 3:2).
- No stock photography tropes; everything is real people.

### Animation and motion

- Almost none. Page is largely static.
- The only animation is **Headless UI `<Transition>`** on the mobile nav popover: `duration-150 ease-out`, scale 95→100 + opacity 0→100 on enter; `duration-100 ease-in` on leave.
- No hover lifts, no parallax, no on-scroll reveals.

### Hover states

- **Primary buttons:** `ember → ember-deep` (darkens to subtitle maroon).
- **Nav links:** `charcoal → ember` (not darker-grey, but accent).
- **Footer links:** `paper/70 → paper/100`.
- **Underlined sunrise links on ink band:** underline persists; no color shift.

### Corner radii

The book is a hard-cornered object — radii are pragmatic and small.

- Buttons: `4px` (rounded)
- Cards: `8px` (rounded-lg)
- Hero images: `12px` (rounded-xl)
- Avatars, pills, badges: `rounded-full`

### Press states

No explicit pressed/active styling. Focus rings use `focus:ring-2 focus:ring-inset focus:ring-indigo-500`.

### Borders

- Card borders: `border border-gray-200` (hairline).
- Divider rules: `border-t border-gray-900/10` (e.g. footer top rule).
- Image rings: `ring-1 ring-black ring-opacity-5` — extremely subtle edge definition on photos.

### Shadows

- Cards: `shadow-sm` (barely visible).
- Hero images and pricing cards with elevated feeling: `shadow-xl` paired with the black ring-1-opacity-5.
- Buttons on the masthead get `rounded-md shadow` wrappers — button + subtle lift.
- No inner shadows. No colored shadows.

### Corner radii

- **Buttons:** `rounded-md` (6px). Every CTA.
- **Avatars, badges, login pill:** `rounded-full`.
- **Hero images:** `rounded-xl` (12px).
- **Topic cards (images):** `rounded-2xl` (16px).
- **Pricing cards:** `rounded-2xl`.

### Cards

Two card archetypes:

1. **Pricing card** — white fill, `border-gray-200`, `rounded-2xl`, `shadow-sm`, `p-8`, internal vertical flex gap-8. Optional `indigo-500` pill badge sits on the top edge (translate-y-1/2).
2. **Topic card** — rounded-2xl image with a title and two-line description below. No border, no container — just the image and text.

### Transparency, blur, gradients

- `mix-blend-multiply` over the masthead image (the signature indigo wash).
- No `backdrop-filter: blur`. No `linear-gradient()`. No glassmorphism.
- `ring-opacity-5`, `border-gray-900/10`, `bg-indigo-800 mix-blend-multiply` are the only uses of opacity.

### Navigation

- White/gray-50 top bar, centered nav links, logo left, `Log in` pill right. `rounded-md` wrapper on the pill with `shadow`.
- Active state is not styled — nav links show hover only.

---

## Iconography

Icons come from **Heroicons v1 (outline)** imported from `@heroicons/react/outline`. The codebase references `MenuIcon`, `XIcon`, `CheckIcon`, `VideoCameraIcon`, `CalendarIcon`, `UserCircleIcon`, `ClockIcon`, `AnnotationIcon`, `GlobeAltIcon`, `LightningBoltIcon`, `ScaleIcon`.

For this design system we pull Heroicons from the CDN rather than bundle an icon font. Use `<svg>` inline or the npm `@heroicons/react` package in production code.

**Social icons** are hand-inlined SVGs in `components/Footer.jsx` (LinkedIn, YouTube, Threads, Instagram, Twitter). They live in `assets/icons/social/` in this system.

**Emoji usage** is almost nonexistent — only `▶️` on the _Watch Intro_ button. Do not add more.

**Unicode characters as icons** — not used.

**Logo** is a wordmark SVG (`assets/logo-tqa.svg`) and a monogram tile (`assets/logo-tqa-bigsquare.svg`). The wordmark spells `THE QUIET ACHIEVR` (note: no final "e") in heavy geometric sans, with the indigo color `#103AE6` on part of the letterforms. The monogram is a rounded square containing `tqa`.

---

## File index

```
/
├── README.md                      ← this file
├── SKILL.md                       ← skill entry for Claude Code
├── colors_and_type.css            ← tokens + semantic element styles
├── assets/
│   ├── logo-tqa.svg               ← wordmark (68×10 viewBox)
│   ├── logo-tqa-bigsquare.svg     ← monogram tile (98×68)
│   ├── TQA-meme-moneypay.svg      ← illustrated meme asset
│   └── icons/social/              ← footer social SVGs
├── preview/                       ← design system cards (register_assets)
│   ├── color-brand.html
│   ├── color-ui.html
│   ├── type-scale.html
│   ├── type-headlines.html
│   ├── buttons.html
│   ├── radii.html
│   ├── shadows.html
│   ├── pricing-card.html
│   ├── topic-card.html
│   ├── testimonial.html
│   ├── masthead.html
│   ├── logo.html
│   └── voice.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html             ← interactive recreation of the homepage
        ├── Navigation.jsx
        ├── Masthead.jsx
        ├── BookHero.jsx
        ├── IntroBand.jsx
        ├── TopicsGrid.jsx
        ├── TestimonialLargeAvatar.jsx
        ├── Feature.jsx
        ├── PricingCard.jsx
        ├── SpeakersGrid.jsx
        ├── Footer.jsx
        └── primitives.jsx         ← Button, Container, etc.
```
