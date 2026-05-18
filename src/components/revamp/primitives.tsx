"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-5 sm:px-8 lg:px-12 ${wide ? "max-w-[1320px]" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}

type EyebrowTone = "ink" | "ember" | "cream" | "sunrise";

export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: EyebrowTone;
  className?: string;
}) {
  const color =
    tone === "ember"
      ? "#D54A2F"
      : tone === "cream"
        ? "#F5F0D3"
        : tone === "sunrise"
          ? "#E5A402"
          : "#2B2B52";

  return (
    <div
      className={`font-sans font-bold uppercase ${className}`}
      style={{
        letterSpacing: "0.18em",
        fontSize: "12px",
        color,
      }}
    >
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "cream" | "ink";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  icon?: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans font-semibold transition-colors";
  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-base",
  };
  const styles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: "var(--tqa-ember)",
      color: "#F5F0D3",
      borderRadius: "4px",
    },
    secondary: {
      background: "transparent",
      color: "#1E1E1E",
      border: "1.5px solid #1E1E1E",
      borderRadius: "4px",
    },
    ghost: {
      background: "transparent",
      color: "#1E1E1E",
      borderRadius: "4px",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
    },
    cream: { background: "#F5F0D3", color: "#2B2B52", borderRadius: "4px" },
    ink: { background: "#2B2B52", color: "#F5F0D3", borderRadius: "4px" },
  };

  const handleEnter = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "#8A2A1C";
    if (variant === "secondary") {
      el.style.background = "#1E1E1E";
      el.style.color = "#F5F0D3";
    }
    if (variant === "ink") el.style.background = "#1A1A3A";
  };

  const handleLeave = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "#D54A2F";
    if (variant === "secondary") {
      el.style.background = "transparent";
      el.style.color = "#1E1E1E";
    }
    if (variant === "ink") el.style.background = "#2B2B52";
  };

  const classNames = `${base} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classNames}
        style={styles[variant]}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
        {icon && <span aria-hidden>{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames}
      style={styles[variant]}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {icon && <span aria-hidden>{icon}</span>}
    </button>
  );
}

export function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 8h12M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PlaceholderTone = "ember" | "sunrise" | "ink" | "paper" | "maroon";

export function PainterPlaceholder({
  tone = "ember",
  label,
  aspect = "4 / 5",
  note,
  className = "",
}: {
  tone?: PlaceholderTone;
  label?: string;
  aspect?: string;
  note?: string;
  className?: string;
}) {
  const palette: Record<
    PlaceholderTone,
    { bg: string; fg: string; stripe: string }
  > = {
    ember: { bg: "#D54A2F", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
    sunrise: { bg: "#E5A402", fg: "#2B2B52", stripe: "rgba(43,43,82,0.06)" },
    ink: { bg: "#2B2B52", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
    paper: { bg: "#FAF6E1", fg: "#2B2B52", stripe: "rgba(43,43,82,0.05)" },
    maroon: { bg: "#8A2A1C", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
  };
  const colors = palette[tone];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect,
        background: colors.bg,
        color: colors.fg,
        borderRadius: "12px",
        backgroundImage: `repeating-linear-gradient(135deg, ${colors.stripe} 0 14px, transparent 14px 28px)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase opacity-80">
          {label}
        </div>
        {note && (
          <div className="mt-2 max-w-[24ch] font-mono text-[10px] opacity-60">
            {note}
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionLabel({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-3"
      style={{ color: "var(--tqa-ember-deep)" }}
    >
      <span className="font-mono text-[11px] tracking-[0.18em]">
        {String(number).padStart(2, "0")}
      </span>
      <span
        className="h-px max-w-[40px] flex-1"
        style={{ background: "currentColor", opacity: 0.4 }}
      />
      <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
}
