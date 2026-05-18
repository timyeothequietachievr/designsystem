"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { NAV_ITEMS } from "@/lib/site-data";

export function Navigation({ onLogin }: { onLogin?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-paper">
      <div className="relative border-b border-paper-200 pt-5 pb-5">
        <Container>
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <a href="/" className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-charcoal">
                  tq<span className="text-ember">a</span>
                </span>
                <span className="font-display hidden text-sm text-charcoal italic sm:inline">
                  the quiet achievr
                </span>
              </a>
              <div className="ml-auto md:hidden">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="rounded p-2 text-charcoal hover:bg-paper-soft"
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold tracking-wider2 text-charcoal uppercase hover:text-ember"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <button
                type="button"
                onClick={onLogin}
                className="inline-flex items-center rounded bg-ember px-4 py-2 text-sm font-semibold text-paper hover:bg-ember-deep"
              >
                Log in
              </button>
            </div>
          </nav>
        </Container>

        {open && (
          <div className="absolute inset-x-0 top-0 z-50 p-2 md:hidden">
            <div className="overflow-hidden rounded-lg bg-paper shadow-md ring-1 ring-charcoal/5">
              <div className="flex items-center justify-between px-5 pt-4">
                <span className="font-display text-xl font-bold text-charcoal">
                  tq<span className="text-ember">a</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded p-2 text-charcoal"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="px-2 pt-2 pb-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-3 py-2 text-sm font-semibold tracking-wider2 text-charcoal uppercase hover:bg-paper-soft"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  onLogin?.();
                  setOpen(false);
                }}
                className="block w-full bg-ember px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
