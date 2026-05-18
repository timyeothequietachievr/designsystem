import type { ReactNode } from "react";

export function ComponentLabelBadge({
  code,
  title,
  className = "",
}: {
  code: string;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute top-3 left-3 z-[250] flex items-center gap-2 ${className}`}
      aria-hidden={title ? undefined : true}
    >
      <span
        className="rounded-sm bg-ember px-2 py-1 font-mono text-[11px] font-bold tracking-wide text-paper shadow-md ring-1 ring-ember-deep/30"
        title={title}
      >
        {code}
      </span>
      {title ? (
        <span className="hidden max-w-[min(40vw,280px)] truncate rounded-sm bg-charcoal/85 px-2 py-1 font-sans text-[10px] font-medium text-paper sm:inline">
          {title}
        </span>
      ) : null}
    </div>
  );
}

export function LabeledComponent({
  code,
  title,
  slug,
  children,
  className = "",
  as: Tag = "div",
}: {
  code: string;
  title?: string;
  slug?: string;
  children: ReactNode;
  className?: string;
  as?: "header" | "footer" | "section" | "div" | "nav";
}) {
  return (
    <Tag
      id={slug}
      className={`relative scroll-mt-24 ${className}`}
      data-component-code={code}
      data-component-title={title}
    >
      <ComponentLabelBadge code={code} title={title} />
      {children}
    </Tag>
  );
}
