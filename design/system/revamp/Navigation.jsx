/* Top navigation with the locked Jeremy Cabral two-line wordmark */

function Wordmark({ size = "md" }) {
  const scale = size === "sm" ? 0.85 : 1;
  return (
    <a href="#top" className="inline-flex flex-col leading-none" aria-label="Tim Yeo — Introvert Coach">
      <span
        className="font-display"
        style={{
          fontSize: `${22 * scale}px`,
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color: "var(--tqa-charcoal)",
          lineHeight: 1,
        }}
      >
        Tim Yeo
      </span>
      <span
        className="font-display italic"
        style={{
          fontSize: `${13 * scale}px`,
          fontWeight: 400,
          marginTop: "3px",
          color: "var(--tqa-ember-deep)",
          letterSpacing: "0",
          lineHeight: 1,
        }}
      >
        Introvert Coach
      </span>
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="font-sans text-[15px] font-medium relative"
      style={{ color: "var(--tqa-charcoal)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tqa-ember)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--tqa-charcoal)")}
    >
      {children}
    </a>
  );
}

function Navigation() {
  const NAV = [
    { name: "Coaching", href: "#coaching" },
    { name: "Book", href: "#book" },
    { name: "School", href: "#school" },
    { name: "Playbooks", href: "#playbooks" },
    { name: "Newsletter", href: "#newsletter" },
    { name: "About", href: "#about" },
  ];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      id="top"
      className="sticky top-0 z-40"
      style={{
        background: scrolled ? "rgba(245,240,211,0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,30,30,0.08)" : "1px solid transparent",
        transition: "background .2s ease, border-color .2s ease",
      }}
    >
      <Container>
        <div className="flex items-center justify-between" style={{ height: "76px" }}>
          <Wordmark />
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#chemistrycall"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 font-sans font-semibold text-[14px]"
              style={{
                background: "var(--tqa-ember)",
                color: "var(--tqa-paper)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--tqa-ember-deep)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--tqa-ember)")}
            >
              Book a chemistry call
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

window.Navigation = Navigation;
window.Wordmark = Wordmark;
