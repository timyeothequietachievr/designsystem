/* Segmenter ("I want to..."), Thesis band, Social proof, Sound Familiar */

function Segmenter() {
  const items = [
    { goal: "get promoted", tone: "ember",   note: "Without changing who you are.", playbook: "Promotions playbook" },
    { goal: "speak up in meetings", tone: "ink", note: "Buy yourself time, then say it.", playbook: "Meetings playbook" },
    { goal: "lead a quiet team", tone: "sunrise", note: "Get the best out of quiet people.", playbook: "Leading quiet teams" },
    { goal: "stop saying yes when I mean no", tone: "maroon", note: "Five tactics, politely.", playbook: "Saying no playbook" },
  ];
  const palette = {
    ember:   { bg: "#D54A2F", fg: "#F5F0D3", note: "rgba(245,240,211,0.78)" },
    ink:     { bg: "#2B2B52", fg: "#F5F0D3", note: "rgba(245,240,211,0.72)" },
    sunrise: { bg: "#E5A402", fg: "#2B2B52", note: "rgba(43,43,82,0.72)" },
    maroon:  { bg: "#8A2A1C", fg: "#F5F0D3", note: "rgba(245,240,211,0.78)" },
  };
  return (
    <section style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <Container>
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
          <SectionLabel number={1} label="Where to start" />
          <div className="font-sans italic text-[14px]" style={{ color: "var(--neutral-700)" }}>
            Pick the one that stings most. We&rsquo;ll work on it.
          </div>
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(28px, 3.4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            color: "var(--tqa-charcoal)",
            maxWidth: "22ch",
            marginBottom: "32px",
          }}
        >
          I want to&hellip;
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const p = palette[it.tone];
            return (
              <a
                key={it.goal}
                href={`#${it.goal.replace(/\s/g, "-")}`}
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
                    <span style={{ opacity: 0.7, fontStyle: "italic", fontWeight: 400 }}>I want to&nbsp;</span>
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
            <Eyebrow tone="sunrise">The thesis</Eyebrow>
            <blockquote
              className="font-display"
              style={{
                fontSize: "clamp(34px, 4.4vw, 64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                fontWeight: 500,
                color: "var(--tqa-paper)",
                marginTop: "24px",
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
              From the book — The Quiet Achiever, Chapter 1
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialProofStrip() {
  const logos = [
    "IxDA Milan",
    "UX Australia",
    "Ezra Coaching",
    "Standard Chartered",
    "ADPList",
    "Design Buddies",
  ];
  return (
    <section style={{ background: "var(--tqa-paper-soft)", padding: "72px 0", borderTop: "1px solid rgba(30,30,30,0.06)", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Eyebrow tone="ember">Receipts</Eyebrow>
            <div
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "12px",
              }}
            >
              <span style={{ color: "var(--tqa-ember)" }}>1,000+</span>
              <span style={{ display: "block", fontSize: "0.42em", fontStyle: "italic", fontWeight: 400, color: "var(--neutral-700)", marginTop: "10px", letterSpacing: "-0.01em" }}>
                introverts coached since 2021.
              </span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--neutral-500)", marginBottom: "20px" }}
            >
              Spoken at &middot; trained &middot; coached
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {logos.map((l) => (
                <div
                  key={l}
                  className="font-display italic"
                  style={{
                    fontSize: "20px",
                    color: "var(--tqa-ink)",
                    letterSpacing: "-0.012em",
                    fontWeight: 500,
                    borderBottom: "1px solid rgba(30,30,30,0.10)",
                    paddingBottom: "12px",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SoundFamiliar() {
  const lines = [
    "You do great work but louder colleagues get the credit.",
    "You freeze in meetings — the right thing to say comes ten minutes too late.",
    "You dread networking events and find yourself counting the minutes till you can leave.",
    "You're up for promotion but feel like an impostor every time a senior leader's in the room.",
    "You've been told to “be more visible” — but no one's told you how.",
  ];
  return (
    <section style={{ padding: "112px 0" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <SectionLabel number={2} label="Sound familiar?" />
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 60px)",
                lineHeight: 1.0,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              You don&rsquo;t need to become someone else.
              <span style={{ display: "block", fontStyle: "italic", color: "var(--tqa-ember)", fontWeight: 500 }}>
                You need tiny habits that work for who you already are.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {lines.map((line, i) => (
                <li
                  key={i}
                  className="font-reading"
                  style={{
                    fontSize: "20px",
                    lineHeight: 1.45,
                    color: "var(--tqa-charcoal)",
                    padding: "26px 0",
                    borderTop: i === 0 ? "1px solid rgba(30,30,30,0.12)" : "none",
                    borderBottom: "1px solid rgba(30,30,30,0.12)",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "20px",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "12px",
                      color: "var(--tqa-ember)",
                      letterSpacing: "0.18em",
                      fontWeight: 700,
                      flexShrink: 0,
                      width: "28px",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.Segmenter = Segmenter;
window.ThesisBand = ThesisBand;
window.SocialProofStrip = SocialProofStrip;
window.SoundFamiliar = SoundFamiliar;
