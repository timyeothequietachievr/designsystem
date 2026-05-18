// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { Container, Eyebrow, Button, SectionLabel, PainterPlaceholder } from "./primitives";
import { BOOK_COMPANY_LOGOS } from "@/lib/book-company-logos";

/* Segmenter ("I want to..."), Thesis band, Social proof, Sound Familiar */

function Segmenter() {
  const items = [
    { goal: "Coaching", tone: "ember", note: "1:1 & personal", playbook: "How coaching works", href: "#coaching" },
    { goal: "Book", tone: "ink", note: "100+ tiny habits for you to read & listen", playbook: "Get the book", href: "/book" },
    { goal: "Leadership School", tone: "sunrise", note: "Structured, videos, online, AI", playbook: "See lessons", href: "#school" },
    { goal: "Speaking", tone: "maroon", note: "Book Tim to speak at your event", playbook: "See details", href: "#speaking" },
  ];
  const palette = {
    ember:   { bg: "#D54A2F", fg: "#F5F0D3", note: "rgba(245,240,211,0.78)" },
    ink:     { bg: "#2B2B52", fg: "#F5F0D3", note: "rgba(245,240,211,0.72)" },
    sunrise: { bg: "#E5A402", fg: "#2B2B52", note: "rgba(43,43,82,0.72)" },
    maroon:  { bg: "#8A2A1C", fg: "#F5F0D3", note: "rgba(245,240,211,0.78)" },
  };
  return (
    <section id="work-with-me" style={{ paddingTop: "72px", paddingBottom: "64px" }}>
      <Container>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 4.4vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.0,
            color: "var(--tqa-charcoal)",
            marginBottom: "20px",
          }}
        >
          How we work together
        </h2>
        <p className="font-sans" style={{ fontSize: "17px", color: "var(--neutral-700)", marginBottom: "34px", maxWidth: "62ch", lineHeight: 1.6 }}>
          I&rsquo;m a coach, author and speaker. I help quiet achievers get promoted, get that new role,
          and get the recognition you deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const p = palette[it.tone];
            return (
              <a
                key={it.goal}
                id={it.goal === "Speaking" ? "speaking" : undefined}
                href={it.href}
                className="group relative block"
                style={{
                  background: p.bg,
                  color: p.fg,
                  borderRadius: "6px",
                  padding: "28px 24px 24px",
                  minHeight: "220px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.18em", opacity: 0.7 }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{ fontSize: "26px", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.018em" }}
                  >
                    {it.goal}.
                  </div>
                  <div
                    className="font-sans"
                    style={{ fontSize: "13px", marginTop: "16px", color: p.note, lineHeight: 1.5 }}
                  >
                    {it.note}
                  </div>
                </div>
                <div
                  className="font-sans inline-flex items-center gap-2"
                  style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, marginTop: "20px", opacity: 0.85 }}
                >
                  {it.playbook}
                  <span aria-hidden>→</span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ThesisBand() {
  return (
    <section style={{ background: "var(--tqa-ink)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <Container>
        <div className="relative">
          {/* big quote mark */}
          <div
            aria-hidden
            className="font-display"
            style={{
              position: "absolute",
              top: "-80px",
              left: "-20px",
              fontSize: "300px",
              lineHeight: 1,
              color: "var(--tqa-ember)",
              opacity: 0.18,
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            &ldquo;
          </div>
          <div className="relative" style={{ maxWidth: "1000px" }}>
            <blockquote
              className="font-display"
              style={{
                fontSize: "clamp(34px, 4.4vw, 64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                fontWeight: 500,
                color: "var(--tqa-paper)",
                textWrap: "balance",
              }}
            >
              Just because you are <em style={{ color: "var(--tqa-sunrise)", fontStyle: "italic" }}>quiet</em> doesn&rsquo;t mean you have <em style={{ color: "var(--tqa-sunrise)", fontStyle: "italic" }}>nothing to say</em>.
            </blockquote>
            <div
              className="font-sans uppercase"
              style={{
                marginTop: "32px",
                color: "rgba(245,240,211,0.6)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              From The Quiet Achiever book
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialProofStrip() {
  return (
    <section style={{ borderBottom: "1px solid rgba(30,30,30,0.08)" }}>
      <div className="bg-paper py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/7 font-semibold text-charcoal">
            Trusted by quiet achievers from top companies around the world
          </h2>
          <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {BOOK_COMPANY_LOGOS.map((logo) => (
              <img
                key={logo.name}
                alt={logo.name}
                src={logo.src}
                width={158}
                height={48}
                className={`col-span-2 w-full object-contain object-center lg:col-span-1 ${logo.wordmark ? "max-h-9" : "max-h-10"}`}
              />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RodQuote() {
  return (
    <section style={{ padding: "72px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <figure className="mx-auto max-w-4xl rounded-xl bg-paper p-8 shadow-[0_24px_48px_-28px_rgba(30,30,30,0.3)] ring-1 ring-charcoal/10 sm:p-10">
          <blockquote className="font-reading text-[22px] leading-relaxed text-charcoal italic">
            &ldquo;It was such a breath of fresh air to work with a coach who understands me. Tim was
            always able to relate to my situation and often felt like he had been there himself.
            I left our sessions with many practical tips and strategies I could use the very next day.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-paper">
              RN
            </div>
            <div>
              <div className="font-sans font-bold text-charcoal">Rod Naber</div>
              <div className="font-sans text-sm text-warm-600">Lead Product Designer, Stripe, USA</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

function SoundFamiliar() {
  return (
    <section id="about" style={{ padding: "112px 0" }}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "22px -24px -24px 24px",
                  background: "var(--tqa-ink)",
                  borderRadius: "10px",
                }}
              />
              <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "3 / 4" }}>
                <img
                  src="/assets/tim-masthead.jpg"
                  alt="Tim Yeo"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center 22%" }}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--tqa-ember)" }}>
              👋 Hi, I&rsquo;m Tim Yeo
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 60px)",
                lineHeight: 1.0,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "14px",
                marginBottom: "24px",
                textWrap: "balance",
              }}
            >
              Being a quiet achiever in a noisy world is hard
            </h2>
            <div className="space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
              <p>
                Over 20+ years, I&rsquo;ve worked as a designer and a leader in tech. Companies
                dominated by <strong className="text-charcoal">big personalities, strong opinions</strong> and{" "}
                <strong className="text-charcoal">loud voices</strong>.
              </p>
              <p>
                For years, I pretended to be an extrovert at work to fit the “extrovert ideal”.
                And it worked. But I was also exhausted, because I was pretending to be someone I was not.
              </p>
              <p>
                I felt invisible. But I refused to give up, and found another path to success. The Quiet
                Achiever is a collection of tiny habits I developed to have impact and influence at work,
                while remaining my true authentic self.
              </p>
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex font-sans text-[15px] font-semibold text-ember underline underline-offset-4"
            >
              Read my full story →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}



export { Segmenter, RodQuote, ThesisBand, SocialProofStrip, SoundFamiliar };
