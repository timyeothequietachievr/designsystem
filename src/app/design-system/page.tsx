import type { Metadata } from "next";
import { Container } from "@/components/revamp/primitives";
import {
  REVAMP_COMPONENT_CATALOG,
  REVAMP_ALT_COMPONENTS,
} from "@/lib/component-catalog";
import { tailwindShowcaseRegistry } from "@/components/tailwind-showcase/registry";

export const metadata: Metadata = {
  title: "Design system | The Quiet Achiever",
  description:
    "Reusable brand tokens, primitives, page patterns, and Tailwind UI blocks for The Quiet Achiever.",
};

const colors = [
  { name: "Ember", token: "ember", value: "#D54A2F", usage: "Primary CTAs, active states, emphasis." },
  { name: "Deep ember", token: "ember-deep", value: "#8A2A1C", usage: "Hover states and deeper accents." },
  { name: "Sunrise", token: "sunrise", value: "#E5A402", usage: "Highlights, stars, small moments of warmth." },
  { name: "Ink", token: "ink", value: "#2B2B52", usage: "Dark panels, secondary CTAs, structured modules." },
  { name: "Paper", token: "paper", value: "#F5F0D3", usage: "Site background and warm surfaces." },
  { name: "Paper soft", token: "paper-soft", value: "#FAF6E1", usage: "Alternating sections and subtle cards." },
  { name: "Charcoal", token: "charcoal", value: "#1E1E1E", usage: "Headings and high-contrast text." },
];

const typography = [
  { name: "Display", className: "font-display", face: "Literata", usage: "Hero headlines, section titles, editorial statements." },
  { name: "Sans", className: "font-sans", face: "Basier Circle", usage: "Navigation, buttons, labels, compact interface copy." },
  { name: "Reading", className: "font-reading", face: "Atkinson Hyperlegible", usage: "Long paragraphs, testimonials, article-style copy." },
  { name: "Mono", className: "font-mono", face: "System mono", usage: "Eyebrows, metadata, component labels, utility notes." },
];

const primitiveRows = [
  ["Container", "Page gutters and max-widths. Use wide for hero/showcase canvases."],
  ["Button", "Primary, secondary, ghost, cream, and ink CTA styles."],
  ["Eyebrow", "Small uppercase label for page sections."],
  ["SectionLabel", "Numbered component label for internal libraries, not production homepage labels."],
  ["PainterPlaceholder", "Branded placeholder art for cards, course tiles, and missing imagery."],
];

const tailwindCategories = [...new Set(tailwindShowcaseRegistry.map((entry) => entry.category))];
const applicationUiCount = tailwindShowcaseRegistry.filter((entry) =>
  entry.category.startsWith("application-ui / "),
).length;
const ecommerceCount = tailwindShowcaseRegistry.filter((entry) =>
  entry.category.startsWith("ecommerce / "),
).length;
const marketingCount =
  tailwindShowcaseRegistry.length - applicationUiCount - ecommerceCount;

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-charcoal/10 py-14 sm:py-18">
      <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-ember uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  const firstTailwindCode = `c${REVAMP_COMPONENT_CATALOG.length + 1}`;
  const lastTailwindCode = `c${REVAMP_COMPONENT_CATALOG.length + tailwindShowcaseRegistry.length}`;

  return (
    <main className="bg-paper text-warm-700">
      <Container className="py-16 sm:py-24">
        <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-ember uppercase">
          The Quiet Achiever
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-charcoal sm:text-7xl">
          Design system
        </h1>
        <p className="mt-6 max-w-3xl font-reading text-xl leading-relaxed text-warm-700">
          A reusable set of brand tokens, primitives, production sections, and
          Tailwind UI blocks for building new TQA pages without starting from scratch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm font-semibold">
          <a className="rounded bg-ember px-4 py-2 text-paper" href="/visual-library">
            Open visual library
          </a>
          <a className="rounded border border-charcoal/20 px-4 py-2 text-charcoal" href="/component-catalog.json">
            View component catalog
          </a>
        </div>

        <Section eyebrow="01 Tokens" title="Brand foundations">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <div key={color.token} className="rounded-lg border border-charcoal/10 bg-paper-soft p-4">
                <div
                  className="h-20 rounded"
                  style={{ background: color.value }}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">
                  {color.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-warm-500">
                  {color.token} / {color.value}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed">{color.usage}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="02 Type" title="Typography">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {typography.map((type) => (
              <div key={type.name} className="rounded-lg border border-charcoal/10 bg-paper-soft p-6">
                <p className="font-mono text-xs font-bold tracking-[0.16em] text-ember uppercase">
                  {type.className}
                </p>
                <p className={`${type.className} mt-3 text-3xl text-charcoal`}>
                  {type.face}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed">{type.usage}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="03 Primitives" title="Reusable building blocks">
          <div className="overflow-hidden rounded-lg border border-charcoal/10 bg-paper-soft">
            <table className="w-full text-left font-sans text-sm">
              <tbody className="divide-y divide-charcoal/10">
                {primitiveRows.map(([name, usage]) => (
                  <tr key={name}>
                    <th className="w-48 px-5 py-4 font-display text-lg font-semibold text-charcoal">
                      {name}
                    </th>
                    <td className="px-5 py-4 text-warm-700">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="04 Sections" title="Production page sections">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {REVAMP_COMPONENT_CATALOG.map((component) => (
              <a
                key={component.code}
                href={`/preview/${component.code}`}
                className="rounded-lg border border-charcoal/10 bg-paper-soft p-4 transition hover:border-ember/50"
              >
                <p className="font-mono text-xs font-bold text-ember">{component.code}</p>
                <p className="mt-2 font-display text-xl font-semibold text-charcoal">
                  {component.title}
                </p>
                <p className="mt-1 font-sans text-xs text-warm-500">{component.slug}</p>
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-ink p-5 text-paper">
            <p className="font-sans text-sm leading-relaxed text-paper/80">
              Alternate hero components are available by slug:{" "}
              {REVAMP_ALT_COMPONENTS.map((item) => item.slug).join(", ")}.
            </p>
          </div>
        </Section>

        <Section eyebrow="05 Tailwind UI" title="Reusable component kits">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
              <p className="font-display text-4xl font-semibold text-charcoal">{marketingCount}</p>
              <p className="mt-2 font-sans text-sm text-warm-700">Marketing blocks</p>
            </div>
            <div className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
              <p className="font-display text-4xl font-semibold text-charcoal">{applicationUiCount}</p>
              <p className="mt-2 font-sans text-sm text-warm-700">Application UI blocks</p>
            </div>
            <div className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
              <p className="font-display text-4xl font-semibold text-charcoal">{ecommerceCount}</p>
              <p className="mt-2 font-sans text-sm text-warm-700">Ecommerce blocks</p>
            </div>
          </div>
          <p className="mt-6 font-sans text-sm leading-relaxed">
            Tailwind blocks now run from {firstTailwindCode} to {lastTailwindCode}. Use{" "}
            <a className="font-semibold text-ember underline" href="/visual-library">
              /visual-library
            </a>{" "}
            to browse, or preview any individual block at /preview/cXXX.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
            {tailwindCategories.map((category) => (
              <div key={category} className="rounded border border-charcoal/10 bg-paper-soft px-4 py-3 font-mono text-xs text-warm-700">
                {category}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="06 Workflow" title="How to build with it">
          <ol className="grid grid-cols-1 gap-4 font-sans text-sm leading-relaxed md:grid-cols-3">
            <li className="rounded-lg bg-paper-soft p-5 ring-1 ring-charcoal/10">
              <strong className="block font-display text-xl text-charcoal">1. Pick a pattern</strong>
              Browse /visual-library or /design-system for the closest section.
            </li>
            <li className="rounded-lg bg-paper-soft p-5 ring-1 ring-charcoal/10">
              <strong className="block font-display text-xl text-charcoal">2. Use TQA primitives</strong>
              Start with Container, Button, type classes, and brand color tokens.
            </li>
            <li className="rounded-lg bg-paper-soft p-5 ring-1 ring-charcoal/10">
              <strong className="block font-display text-xl text-charcoal">3. Adapt, do not invent</strong>
              Keep copy, spacing, colors, CTAs, and analytics behavior consistent.
            </li>
          </ol>
        </Section>
      </Container>
    </main>
  );
}
