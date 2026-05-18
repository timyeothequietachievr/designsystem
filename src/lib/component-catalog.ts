/**
 * Stable component IDs for Notion -> build workflow.
 * c1-c17: homepage revamp. c18+: Tailwind UI blocks (marketing, application UI, ecommerce).
 */
export type ComponentCatalogEntry = {
  code: string;
  slug: string;
  title: string;
  source: "revamp" | "tailwind";
  category?: string;
};

export const REVAMP_COMPONENT_CATALOG: ComponentCatalogEntry[] = [
  { code: "c1", slug: "navigation", title: "Navigation", source: "revamp" },
  { code: "c2", slug: "hero-portrait-split", title: "Hero — portrait split", source: "revamp" },
  { code: "c3", slug: "segmenter", title: "Segmenter", source: "revamp" },
  { code: "c4", slug: "thesis-band", title: "Thesis band", source: "revamp" },
  { code: "c5", slug: "social-proof-strip", title: "Social proof strip", source: "revamp" },
  { code: "c6", slug: "sound-familiar", title: "Sound familiar", source: "revamp" },
  { code: "c7", slug: "coaching-summary", title: "Coaching summary", source: "revamp" },
  { code: "c8", slug: "toni-block", title: "Toni block", source: "revamp" },
  { code: "c9", slug: "book-block", title: "Book block", source: "revamp" },
  { code: "c10", slug: "latest-writing", title: "Latest writing", source: "revamp" },
  { code: "c11", slug: "start-here", title: "Start here", source: "revamp" },
  { code: "c12", slug: "school-block", title: "School block", source: "revamp" },
  { code: "c13", slug: "playbooks-band", title: "Playbooks band", source: "revamp" },
  { code: "c14", slug: "newsletter-band", title: "Newsletter band", source: "revamp" },
  { code: "c15", slug: "elsewhere-strip", title: "Elsewhere strip", source: "revamp" },
  { code: "c16", slug: "footer-rev", title: "Footer", source: "revamp" },
  { code: "c17", slug: "toni-bubble", title: "Toni bubble (floating)", source: "revamp" },
];

/** Hero variants in hero.tsx — not on homepage; use slug when requesting a swap. */
export const REVAMP_ALT_COMPONENTS: ComponentCatalogEntry[] = [
  {
    code: "—",
    slug: "hero-editorial",
    title: "Hero — editorial (alt)",
    source: "revamp",
  },
  {
    code: "—",
    slug: "hero-magazine",
    title: "Hero — magazine (alt)",
    source: "revamp",
  },
  {
    code: "—",
    slug: "hero-masthead",
    title: "Hero — masthead (alt)",
    source: "revamp",
  },
];

export const REVAMP_COMPONENT_COUNT = REVAMP_COMPONENT_CATALOG.length;

export function tailwindComponentCode(registryIndex: number): string {
  return `c${REVAMP_COMPONENT_COUNT + registryIndex + 1}`;
}

export function parseComponentCode(code: string): number | null {
  const match = /^c(\d+)$/i.exec(code.trim());
  if (!match) return null;
  return Number.parseInt(match[1], 10);
}
