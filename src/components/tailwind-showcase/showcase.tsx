"use client";

import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Container } from "@/components/revamp/primitives";
import { ComponentLabelBadge } from "@/components/component-label";
import {
  REVAMP_COMPONENT_COUNT,
  tailwindComponentCode,
} from "@/lib/component-catalog";
import { tailwindShowcaseRegistry } from "./registry";

class ShowcaseErrorBoundary extends Component<
  { children: ReactNode; label: string },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="rounded-lg border border-ember/30 bg-paper-soft p-8 font-sans text-sm text-warm-700">
          <p className="font-display text-2xl font-semibold text-charcoal">
            Could not render {this.props.label}
          </p>
          <p className="mt-3">
            This imported Tailwind UI example expects sample data or runtime
            context that is missing. The component is still stored in the
            library for adaptation.
          </p>
          <pre className="mt-4 overflow-auto rounded bg-ink p-4 text-xs text-paper">
            {this.state.error.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export function TailwindComponentShowcase({ eager = false }: { eager?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [showBlocks, setShowBlocks] = useState(eager);
  const categories = useMemo(
    () => [...new Set(tailwindShowcaseRegistry.map((e) => e.category))],
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const visibleEntries = tailwindShowcaseRegistry.filter(
    (entry) => entry.category === selectedCategory,
  );

  useEffect(() => {
    if (eager) return;
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBlocks(true);
          observer.disconnect();
        }
      },
      { rootMargin: "480px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  const firstTailwindCode = tailwindComponentCode(0);
  const lastTailwindCode = tailwindComponentCode(
    tailwindShowcaseRegistry.length - 1,
  );

  return (
    <section
      ref={sectionRef}
      id="tailwind-showcase"
      className="border-t-4 border-ember bg-paper-soft"
      aria-labelledby="tailwind-showcase-heading"
    >
      <Container wide className="py-20 sm:py-28">
        <p className="eyebrow text-ember">Component library</p>
        <h2
          id="tailwind-showcase-heading"
          className="display-headline mt-4 font-bold text-charcoal"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
        >
          Tailwind UI Marketing — styled for The Quiet Achiever
        </h2>
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-warm-700">
          All {tailwindShowcaseRegistry.length} blocks from your uploaded
          Tailwind UI kits, recolored with ember, ink, and paper tokens. Each block
          has a label ({firstTailwindCode}–{lastTailwindCode}) for your Notion
          page picks.
        </p>
        <p className="mt-2 font-mono text-xs text-warm-500">
          Homepage revamp sections are c1–c{REVAMP_COMPONENT_COUNT}. Full index:{" "}
          <a href="/component-catalog.json" className="text-ember underline">
            component-catalog.json
          </a>
        </p>
        <div className="mt-8 rounded-lg border border-charcoal/10 bg-paper p-4">
          <label
            htmlFor="tailwind-category"
            className="font-mono text-[11px] font-bold tracking-[0.16em] text-ember uppercase"
          >
            Browse category
          </label>
          <select
            id="tailwind-category"
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
              setShowBlocks(true);
            }}
            className="mt-2 w-full rounded border border-charcoal/15 bg-paper-soft px-3 py-2 font-sans text-sm text-charcoal"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category} ({tailwindShowcaseRegistry.filter((entry) => entry.category === category).length})
              </option>
            ))}
          </select>
          <p className="mt-2 font-sans text-sm text-warm-500">
            Showing one category at a time keeps the library stable now that it
            contains hundreds of components.
          </p>
        </div>
      </Container>

      {showBlocks ? (
        <div className="space-y-24 pb-32">
          <div key={selectedCategory}>
            <Container wide>
              <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-ember-deep uppercase">
                {selectedCategory}
              </h3>
            </Container>
            <div className="mt-8 space-y-16">
              {visibleEntries.map((entry) => {
                const registryIndex = tailwindShowcaseRegistry.findIndex(
                  (e) => e.id === entry.id,
                );
                const code = tailwindComponentCode(registryIndex);
                return (
                  <article
                    key={entry.id}
                    id={entry.id}
                    className="scroll-mt-24 overflow-hidden border-y border-paper-200 bg-paper"
                    data-component-code={code}
                  >
                    <Container wide className="py-3">
                      <p className="font-sans text-sm font-semibold text-charcoal">
                        <span className="mr-2 inline-block rounded-sm bg-ember px-1.5 py-0.5 font-mono text-[11px] font-bold text-paper">
                          {code}
                        </span>
                        {entry.label}
                      </p>
                      <p className="font-mono text-[11px] text-warm-500">
                        {entry.id}
                      </p>
                    </Container>
                    <div className="tailwind-showcase-sandbox relative">
                      <ComponentLabelBadge
                        code={code}
                        title={entry.label}
                      />
                      <div className="tailwind-showcase-block font-sans [&_h1]:font-display [&_h2]:font-display [&_h3]:font-display">
                        <ShowcaseErrorBoundary label={entry.label}>
                          <entry.Component />
                        </ShowcaseErrorBoundary>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
