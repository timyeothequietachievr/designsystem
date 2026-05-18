/* Coaching summary, Toni introduction, Book block */

function CoachingSummary() {
  const outcomes = [
    "Walk into meetings with talking points and the confidence to use them.",
    "Have the difficult conversations you've been avoiding.",
    "Get promoted without pretending to be someone you're not.",
  ];
  const steps = [
    { n: "01", t: "Chemistry call", d: "30 min, free. We talk through what you're stuck on. If we're not a fit, I'll tell you." },
    { n: "02", t: "Deep Dive",      d: "90 min workshop. Identify the problem, set success measures. Output: your Coaching Plan." },
    { n: "03", t: "Coaching plan",  d: "Fortnightly sessions plus Text/WhatsApp between. The work happens between sessions." },
  ];
  return (
    <section id="coaching" style={{ padding: "112px 0", background: "var(--tqa-paper)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel number={3} label="The primary offer" />
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              Coach with me, <em style={{ color: "var(--tqa-ember)", fontStyle: "italic" }}>1:1</em>.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--neutral-700)", marginTop: "24px", maxWidth: "44ch" }}
            >
              I work with a very specific group: ambitious quiet achievers and introverts who want to step into leadership without losing themselves. If that&rsquo;s you, let&rsquo;s talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="#chemistrycall">
                Book a chemistry call
                <span aria-hidden>→</span>
              </Button>
              <a href="#coaching-detail" className="font-sans font-medium text-[15px]" style={{ color: "var(--tqa-charcoal)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
                See offers &amp; pricing
              </a>
            </div>
            <p className="font-sans italic" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "20px", maxWidth: "44ch", lineHeight: 1.5 }}>
              Chemistry matters. If we&rsquo;re not a fit, I&rsquo;ll tell you — and point you somewhere that is.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--neutral-500)", marginBottom: "16px" }}
            >
              In three months, you will&hellip;
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {outcomes.map((o, i) => (
                <li
                  key={i}
                  className="font-reading"
                  style={{
                    fontSize: "22px",
                    lineHeight: 1.4,
                    color: "var(--tqa-charcoal)",
                    padding: "20px 0",
                    borderTop: "1px solid rgba(30,30,30,0.12)",
                    display: "flex",
                    gap: "20px",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: "var(--tqa-ember)", fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "26px", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
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
            <SectionLabel number={4} label="If you're not ready yet" />
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
              Not ready to talk to Tim?
              <span style={{ display: "block", fontStyle: "italic", color: "var(--tqa-ember)" }}>
                Talk to Toni.
              </span>
            </h2>
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--neutral-700)", marginTop: "20px", maxWidth: "48ch" }}>
              Toni is an AI coach trained on Tim&rsquo;s book and methodology. Ask her about a specific situation — a meeting, a piece of feedback, saying no, getting promoted — and get a thoughtful answer in Tim&rsquo;s voice. When she&rsquo;s not sure, Tim takes over.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="md" href="#ai">
                Start a conversation with Toni
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
  const blurbs = [
    { title: "Intro",      copy: "Quiet is a strength, not a flaw. Same success, different path." },
    { title: "Small talk", copy: "Three openers that don&rsquo;t feel ick — for the bus stop and the all-hands." },
    { title: "Meetings",   copy: "Five tiny habits to buy yourself time and say the thing you wanted to say." },
    { title: "Saying no",  copy: "Five tactics, politely. Without burning bridges or your evenings." },
  ];
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
                  src="assets/book-cover.jpg"
                  alt="The Quiet Achiever, by Tim Yeo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-6">
            <SectionLabel number={5} label="The book" />
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
              <em style={{ fontStyle: "italic", color: "var(--tqa-ember)" }}>The Quiet Achiever</em> &mdash; tiny habits to have impact at work.
            </h2>
            <p className="font-sans italic" style={{ fontSize: "17px", color: "var(--tqa-ember-deep)", marginTop: "16px" }}>
              (without pretending to be an extrovert)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-10">
              {blurbs.map((b) => (
                <div key={b.title} style={{ borderTop: "1px solid rgba(30,30,30,0.12)", paddingTop: "16px" }}>
                  <div
                    className="font-mono uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-ember)", fontWeight: 700, marginBottom: "8px" }}
                  >
                    {b.title}
                  </div>
                  <div className="font-reading" style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--tqa-charcoal)" }}
                       dangerouslySetInnerHTML={{ __html: b.copy }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="#book-buy">
                Get the book
                <span aria-hidden>→</span>
              </Button>
              <a href="#checklist" className="font-sans font-medium text-[15px]" style={{ color: "var(--tqa-charcoal)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
                Or download the Tiny Habits Checklist <span style={{ color: "var(--neutral-500)" }}>(free)</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.CoachingSummary = CoachingSummary;
window.ToniBlock = ToniBlock;
window.BookBlock = BookBlock;
