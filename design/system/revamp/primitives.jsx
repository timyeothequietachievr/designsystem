/* Shared primitives for the Quiet Achiever revamp homepage */

function Container({ children, className = "", wide = false }) {
  return (
    <div className={`mx-auto px-5 sm:px-8 lg:px-12 ${wide ? "max-w-[1320px]" : "max-w-[1200px]"} ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children, tone = "ink", className = "" }) {
  const colors = {
    ink: "color: var(--tqa-ink)",
    ember: "color: var(--tqa-ember)",
    cream: "color: var(--tqa-paper)",
    sunrise: "color: var(--tqa-sunrise)",
  };
  return (
    <div
      className={`font-sans font-bold uppercase ${className}`}
      style={{
        letterSpacing: "0.18em",
        fontSize: "12px",
        color:
          tone === "ember" ? "#D54A2F" :
          tone === "cream" ? "#F5F0D3" :
          tone === "sunrise" ? "#E5A402" :
          "#2B2B52",
      }}
    >
      {children}
    </div>
  );
}

function Button({ children, variant = "primary", size = "md", href, onClick, className = "", icon }) {
  const base = "inline-flex items-center justify-center gap-2 font-sans font-semibold transition-colors";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-base",
  };
  const variants = {
    primary: "text-paper",
    secondary: "text-charcoal",
    ghost: "text-charcoal",
    cream: "text-ink",
  };
  const styles = {
    primary: { background: "var(--tqa-ember)", color: "#F5F0D3", borderRadius: "4px" },
    secondary: { background: "transparent", color: "#1E1E1E", border: "1.5px solid #1E1E1E", borderRadius: "4px" },
    ghost: { background: "transparent", color: "#1E1E1E", borderRadius: "4px", textDecoration: "underline", textUnderlineOffset: "4px" },
    cream: { background: "#F5F0D3", color: "#2B2B52", borderRadius: "4px" },
    ink: { background: "#2B2B52", color: "#F5F0D3", borderRadius: "4px" },
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${className}`}
      style={styles[variant]}
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "#8A2A1C";
        if (variant === "secondary") { e.currentTarget.style.background = "#1E1E1E"; e.currentTarget.style.color = "#F5F0D3"; }
        if (variant === "ink") e.currentTarget.style.background = "#1A1A3A";
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "#D54A2F";
        if (variant === "secondary") { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E1E1E"; }
        if (variant === "ink") e.currentTarget.style.background = "#2B2B52";
      }}
    >
      {children}
      {icon && <span aria-hidden>{icon}</span>}
    </Tag>
  );
}

/* Hand-drawn-looking arrow used on inline links */
function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* Painterly stripe placeholder — used wherever we don't have real imagery yet */
function PainterPlaceholder({ tone = "ember", label, aspect = "4 / 5", note, className = "" }) {
  const palette = {
    ember:   { bg: "#D54A2F", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
    sunrise: { bg: "#E5A402", fg: "#2B2B52", stripe: "rgba(43,43,82,0.06)" },
    ink:     { bg: "#2B2B52", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
    paper:   { bg: "#FAF6E1", fg: "#2B2B52", stripe: "rgba(43,43,82,0.05)" },
    maroon:  { bg: "#8A2A1C", fg: "#F5F0D3", stripe: "rgba(245,240,211,0.06)" },
  }[tone];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect,
        background: palette.bg,
        color: palette.fg,
        borderRadius: "12px",
        backgroundImage:
          `repeating-linear-gradient(135deg, ${palette.stripe} 0 14px, transparent 14px 28px)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">{label}</div>
        {note && <div className="font-mono text-[10px] opacity-60 mt-2 max-w-[24ch]">{note}</div>}
      </div>
    </div>
  );
}

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3" style={{ color: "var(--tqa-ember-deep)" }}>
      <span className="font-mono text-[11px] tracking-[0.18em]">{String(number).padStart(2, "0")}</span>
      <span className="h-px flex-1 max-w-[40px]" style={{ background: "currentColor", opacity: 0.4 }} />
      <span className="font-sans uppercase font-bold tracking-[0.18em] text-[11px]">{label}</span>
    </div>
  );
}

window.Container = Container;
window.Eyebrow = Eyebrow;
window.Button = Button;
window.ArrowRight = ArrowRight;
window.PainterPlaceholder = PainterPlaceholder;
window.SectionLabel = SectionLabel;
