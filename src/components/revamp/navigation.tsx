"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Container } from "./primitives";

/* Top navigation with the locked Jeremy Cabral two-line wordmark */

function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const scale = size === "sm" ? 0.85 : 1;
  return (
    <Link href="/" className="inline-flex flex-col leading-none" aria-label="Tim Yeo — Introvert Coach">
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
    </Link>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-sans text-[15px] font-medium relative"
      style={{ color: "var(--tqa-charcoal)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tqa-ember)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--tqa-charcoal)")}
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  const NAV = [
    { name: "Coaching", href: "/#coaching" },
    { name: "Book", href: "/book" },
    { name: "School", href: "/#school" },
    { name: "Toni", href: "/toni" },
    { name: "Speaking", href: "/#speaking" },
    { name: "Playbooks", href: "/#playbooks" },
    { name: "Newsletter", href: "/#newsletter" },
    { name: "About", href: "/about" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      id="top"
      className="sticky top-0 z-[100]"
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
            <Link
              href="/#coaching"
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
            </Link>
            <button
              type="button"
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded"
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              style={{
                border: "1px solid rgba(30,30,30,0.14)",
                color: "var(--tqa-charcoal)",
                background: "rgba(245,240,211,0.72)",
              }}
            >
              <span aria-hidden style={{ fontSize: "22px", lineHeight: 1 }}>
                {open ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
        {open ? (
          <nav
            className="lg:hidden pb-5"
            style={{ borderTop: "1px solid rgba(30,30,30,0.08)" }}
          >
            <div className="flex flex-col gap-4 pt-5">
              {NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-[17px] font-semibold"
                  style={{ color: "var(--tqa-charcoal)", textDecoration: "none" }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#coaching"
                className="font-sans inline-flex h-11 items-center justify-center rounded font-bold"
                style={{
                  background: "var(--tqa-ember)",
                  color: "var(--tqa-paper)",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                Book a chemistry call →
              </Link>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}

