"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/revamp/primitives";

/** Minimal masthead — pattern: c39 constrained header */
export function BookMasthead() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className="sticky top-0 z-[100]"
      style={{
        background: scrolled ? "rgba(245,240,211,0.94)" : "var(--tqa-paper)",
        backdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,30,30,0.08)" : "1px solid transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="inline-flex flex-col leading-none" aria-label="Tim Yeo — Introvert Coach">
            <span
              className="font-display text-[22px] font-bold tracking-tight"
              style={{ color: "var(--tqa-charcoal)", lineHeight: 1 }}
            >
              Tim Yeo
            </span>
            <span
              className="font-display mt-0.5 text-[13px] italic"
              style={{ color: "var(--tqa-ember-deep)", lineHeight: 1 }}
            >
              Introvert Coach
            </span>
          </Link>
          <a
            href="#formats"
            className="inline-flex h-10 items-center gap-2 rounded px-4 font-sans text-[14px] font-semibold"
            style={{ background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}
          >
            Buy the book
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
