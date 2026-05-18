// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { Container, Eyebrow, Button, SectionLabel, PainterPlaceholder } from "./primitives";

/* Coaching summary, Toni introduction, Book block */

function CoachingSummary() {
  const steps = [
    { n: "01", t: "Chemistry call", d: "20-min video call. We talk about your challenges and see if we are a fit. Free." },
    { n: "02", t: "Deep Dive", d: "90min goal-setting workshop. You get clarity and a Coaching Plan with actions." },
    { n: "03", t: "Coaching plan", d: "Fortnightly sessions. Tiny habits, practised in real situations. Text support between sessions." },
  ];
  return (
    <section id="coaching" style={{ padding: "112px 0", background: "var(--tqa-paper)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                textWrap: "balance",
              }}
            >
              Coaching
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--neutral-700)", marginTop: "24px", maxWidth: "44ch" }}
            >
              <strong style={{ color: "var(--tqa-charcoal)" }}>It&rsquo;s just you and me.</strong>{" "}
              We unpack your challenges and define what success looks like for you. Then, we make an
              action plan, and we get to work. Confidence comes from evidence. My approach focuses on
              progress through action. Results only come if you practise.
            </p>
            <div
              className="font-sans"
              style={{
                background: "var(--tqa-paper-soft)",
                border: "1px solid rgba(30,30,30,0.08)",
                borderRadius: "8px",
                color: "var(--tqa-charcoal)",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: 1.45,
                marginTop: "22px",
                maxWidth: "44ch",
                padding: "14px 16px",
              }}
            >
              100% money-back guarantee.
            </div>
            <p className="font-sans italic" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "14px", maxWidth: "44ch", lineHeight: 1.5 }}>
              Chemistry matters. If we&rsquo;re not a fit, I&rsquo;ll tell you — and point you somewhere that is.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div>
              <div
                className="font-sans uppercase"
                style={{ fontSize: "12px", letterSpacing: "0.18em", color: "var(--tqa-ember)", fontWeight: 700, marginBottom: "20px" }}
              >
                How it works
              </div>
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map((s) => (
                  <li
                    key={s.n}
                    style={{
                      background: "var(--tqa-paper-soft)",
                      border: "1px solid rgba(30,30,30,0.08)",
                      borderRadius: "6px",
                      padding: "20px",
                    }}
                  >
                    <div className="font-mono" style={{ color: "var(--tqa-ember-deep)", fontSize: "11px", letterSpacing: "0.18em", fontWeight: 700 }}>
                      {s.n}
                    </div>
                    <div className="font-display" style={{ fontSize: "20px", letterSpacing: "-0.018em", fontWeight: 600, marginTop: "8px", color: "var(--tqa-charcoal)" }}>
                      {s.t}
                    </div>
                    <div className="font-sans" style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--neutral-700)", marginTop: "8px" }}>
                      {s.d}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button variant="primary" size="lg" href="#coaching">
                  Book a chemistry call
                  <span aria-hidden>→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ToniBlock() {
  return (
    <section id="ai" style={{ padding: "112px 0" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              Meet Toni,
              <span style={{ display: "block", fontStyle: "italic", color: "var(--tqa-ember)" }}>
                Tim&rsquo;s AI-bot.
              </span>
            </h2>
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--neutral-700)", marginTop: "20px", maxWidth: "48ch" }}>
              Toni is an AI coach trained on Tim&rsquo;s book and methodology. Ask her about a specific situation — a meeting, a piece of feedback, saying no, getting promoted — and get a thoughtful answer in Tim&rsquo;s voice. When she&rsquo;s not sure, Tim takes over.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="md" href="/toni">
                Open the Toni chat
                <span aria-hidden>→</span>
              </Button>
              <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--neutral-500)", textTransform: "uppercase" }}>
                🔊 Voice mode &middot; Multilingual
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <ToniChatPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ToniChatPreview() {
  return (
    <div
      style={{
        background: "var(--tqa-paper-soft)",
        border: "1px solid rgba(30,30,30,0.08)",
        borderRadius: "10px",
        padding: "24px",
        boxShadow: "0 20px 40px -20px rgba(30,30,30,0.18)",
      }}
    >
      <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: "1px solid rgba(30,30,30,0.08)" }}>
        <div className="flex items-center gap-3">
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              background: "var(--tqa-sunrise)",
              color: "var(--tqa-ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            T
          </div>
          <div>
            <div className="font-sans" style={{ fontSize: "13px", fontWeight: 700, color: "var(--tqa-charcoal)" }}>
              Toni
            </div>
            <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--tqa-ember)", textTransform: "uppercase" }}>
              ● Trained on Tim&rsquo;s book
            </div>
          </div>
        </div>
        <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--neutral-500)", textTransform: "uppercase" }}>
          ALPHA
        </div>
      </div>

      {/* user msg */}
      <div className="flex justify-end mb-3">
        <div
          className="font-sans"
          style={{
            background: "var(--tqa-ink)",
            color: "var(--tqa-paper)",
            padding: "12px 16px",
            borderRadius: "12px 12px 4px 12px",
            fontSize: "14px",
            lineHeight: 1.45,
            maxWidth: "70%",
          }}
        >
          My boss says I need to “be more visible”. I have no idea what that means in practice.
        </div>
      </div>

      {/* toni msg */}
      <div className="flex justify-start mb-3">
        <div
          className="font-reading"
          style={{
            background: "var(--white)",
            color: "var(--tqa-charcoal)",
            padding: "14px 18px",
            borderRadius: "12px 12px 12px 4px",
            fontSize: "14px",
            lineHeight: 1.55,
            maxWidth: "78%",
            border: "1px solid rgba(30,30,30,0.06)",
          }}
        >
          That feedback is famously useless without follow-up. Let&rsquo;s break it down: in the next two meetings, try one tiny habit — <strong style={{ color: "var(--tqa-ember-deep)" }}>front-load your contribution</strong>. Speak in the first ten minutes, even if it&rsquo;s a question. The data point your boss is missing is that you&rsquo;re engaged. Want a script?
          <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
            <button className="font-sans" style={{ background: "var(--tqa-paper)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: 600, color: "var(--tqa-charcoal)" }}>
              Yes, give me a script
            </button>
            <button className="font-sans" style={{ background: "var(--tqa-paper)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", fontWeight: 600, color: "var(--tqa-charcoal)" }}>
              🔊 Hear Tim say this
            </button>
          </div>
        </div>
      </div>

      <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--neutral-500)", textTransform: "uppercase", textAlign: "center", marginTop: "16px" }}>
        Voice cloned with disclosure &middot; Transcripts private by default
      </div>
    </div>
  );
}

function BookBlock() {
  return (
    <section id="book" style={{ padding: "120px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* book cover */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "16px -22px -22px 22px",
                  background: "var(--tqa-ember)",
                  borderRadius: "4px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 24px 48px -16px rgba(30,30,30,0.25)",
                  aspectRatio: "5 / 7.6",
                }}
              >
                <img
                  src="/assets/book-cover.jpg"
                  alt="The Quiet Achiever, by Tim Yeo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-6">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                lineHeight: 0.98,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              <em style={{ fontStyle: "italic", color: "var(--tqa-ember)" }}>The Quiet Achiever</em> &mdash; tiny habits to have impact at work without pretending to be an extrovert.
            </h2>
            <p className="font-sans italic" style={{ fontSize: "17px", color: "var(--tqa-ember-deep)", marginTop: "16px" }}>
              10 chapters. 100 tiny habits. Be seen &amp; be heard while remaining your true self.
            </p>
            <p className="font-reading mt-5 text-[17px] leading-relaxed text-warm-700">
              Available in print, eBook, and audiobook (narrated by me👋).
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="/book">
                Get the book
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function VincentQuote() {
  return (
    <section style={{ padding: "80px 0", background: "var(--tqa-paper)" }}>
      <Container>
        <figure className="rounded-xl bg-paper-soft p-8 ring-1 ring-charcoal/10 sm:p-10">
          <blockquote className="font-reading text-[20px] leading-relaxed text-charcoal italic">
            &ldquo;Do you like reading IKEA instructions? I DO! Tim&rsquo;s teaching gives me the user manual
            to myself. Accompanied with relatable stories, practical tips and practices, I now have
            a better understanding of my own way of communicating — and practical tips to amplify the
            impact of what I want to say, to my friends, my lovers, my colleagues and anyone I care about.
            HIGHLY RECOMMEND!&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 font-sans text-sm text-warm-700">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-paper">
              VK
            </div>
            <div>
              <strong className="text-charcoal">Vincent Kavanagh</strong>
              <br />
              UK · ★★★★★ Amazon, verified purchase
            </div>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}


export { CoachingSummary, ToniBlock, BookBlock, VincentQuote };
