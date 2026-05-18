"use client";

import { ComponentLabelBadge } from "@/components/component-label";
import type { ResolvedComponent } from "@/lib/component-by-code";

export function ComponentPreview({ resolved }: { resolved: ResolvedComponent }) {
  const { code, entry, Component } = resolved;
  const isToniBubble = entry.slug === "toni-bubble";
  const isTailwind = entry.source === "tailwind";

  const body = <Component />;

  return (
    <div className="min-h-[60vh] bg-paper">
      <div className="border-b border-paper-200 bg-paper-soft px-4 py-3 sm:px-6">
        <p className="font-mono text-[11px] font-bold tracking-wide text-ember">
          {code}
        </p>
        <p className="font-sans text-sm font-semibold text-charcoal">{entry.title}</p>
        {entry.category ? (
          <p className="font-mono text-[11px] text-warm-500">{entry.category}</p>
        ) : null}
      </div>
      <div
        className={`relative ${isToniBubble ? "min-h-[320px]" : ""}`}
        data-component-code={code}
      >
        <ComponentLabelBadge
          code={code}
          title={entry.title}
          className={isToniBubble ? "fixed top-auto bottom-24 left-3" : undefined}
        />
        {isTailwind ? (
          <div className="tailwind-showcase-sandbox">
            <div className="tailwind-showcase-block font-sans [&_h1]:font-display [&_h2]:font-display [&_h3]:font-display">
              {body}
            </div>
          </div>
        ) : (
          body
        )}
      </div>
    </div>
  );
}
