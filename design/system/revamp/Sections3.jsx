/* Latest writing, Start here, School, Playbooks, Newsletter, Tim Elsewhere, Footer, Sticky Toni */

function LatestWriting() {
  const posts = [
    { tag: "Meetings",      title: "The five-minute pre-meeting that saves your career", read: "4 min read", date: "Apr 22" },
    { tag: "Saying no",     title: "How to say no to your boss without saying the word",  read: "6 min read", date: "Apr 15" },
    { tag: "Self-promotion",title: "A quiet guide to self-promotion that doesn&rsquo;t feel ick", read: "8 min read", date: "Apr 08" },
  ];
  return (
    <section style={{ padding: "112px 0" }}>
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <SectionLabel number={6} label="Latest writing" />
            <h2 className="font-display"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.0, letterSpacing: "-0.02em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px" }}>
              From the newsletter.
            </h2>
          </div>
          <a href="#newsletter" className="font-sans font-semibold text-[14px] inline-flex items-center gap-2"
             style={{ color: "var(--tqa-ember)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
            All essays &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <a key={i} href="#post" className="block group" style={{ textDecoration: "none" }}>
              <div style={{ borderTop: "1.5px solid var(--tqa-charcoal)", paddingTop: "16px" }}>
                <div className="flex items-center gap-3 font-mono" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--neutral-500)", textTransform: "uppercase" }}>
                  <span style={{ color: "var(--tqa-ember)", fontWeight: 700 }}>{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <div className="font-display" style={{ fontSize: "26px", lineHeight: 1.1, letterSpacing: "-0.018em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px", minHeight: "120px" }}
                     dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="font-sans" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "20px" }}>
                  {p.read}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StartHere() {
  const tiles = [
    { icon: "🎙️", label: "Best podcast appearance", note: "30 minutes on Lenny&rsquo;s Podcast", cta: "Listen" },
    { icon: "📋", label: "Tiny Habits Checklist",    note: "Every habit in the book, on one page", cta: "Free download" },
    { icon: "📖", label: "Free book chapter",        note: "Chapter 1 — straight to your inbox",   cta: "Read free" },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto 56px" }}>
          <Eyebrow tone="ember">New here?</Eyebrow>
          <h2 className="font-display"
              style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.022em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px" }}>
            Start with these three.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiles.map((t, i) => (
            <a key={i} href="#start" className="block" style={{
              background: "var(--tqa-paper)",
              border: "1px solid rgba(30,30,30,0.10)",
              borderRadius: "8px",
              padding: "28px 24px",
              textDecoration: "none",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: "32px", lineHeight: 1, marginBottom: "16px" }}>{t.icon}</div>
                <div className="font-display" style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.018em", fontWeight: 600, color: "var(--tqa-charcoal)" }}
                     dangerouslySetInnerHTML={{ __html: t.label }} />
                <div className="font-sans" style={{ fontSize: "14px", color: "var(--neutral-700)", marginTop: "10px", lineHeight: 1.5 }}>{t.note}</div>
              </div>
              <div className="font-sans inline-flex items-center gap-2" style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tqa-ember)", marginTop: "20px" }}>
                {t.cta} <span aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SchoolBlock() {
  const courses = [
    { title: "Public Speaking",        meta: "6 lessons · self-paced" },
    { title: "Difficult Conversations", meta: "5 lessons · self-paced" },
    { title: "Saying No",              meta: "4 lessons · self-paced" },
    { title: "Networking",             meta: "5 lessons · self-paced" },
    { title: "Interviews",             meta: "7 lessons · self-paced" },
    { title: "Executive Communication",meta: "8 lessons · self-paced" },
  ];
  return (
    <section id="school" style={{ padding: "112px 0" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          <div className="lg:col-span-7">
            <SectionLabel number={7} label="The school" />
            <h2 className="font-display"
                style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.022em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px", textWrap: "balance" }}>
              Learn the skills you need, on your own time.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <a href="#school-all" className="font-sans inline-flex items-center gap-2 font-semibold" style={{ fontSize: "14px", color: "var(--tqa-ember)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
              Browse the whole school <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <a key={i} href="#course" style={{
              display: "block",
              background: "var(--tqa-paper-soft)",
              border: "1px solid rgba(30,30,30,0.08)",
              borderRadius: "6px",
              padding: "20px",
              textDecoration: "none",
            }}>
              <PainterPlaceholder
                tone={["ember","ink","sunrise","maroon","ember","ink"][i % 6]}
                label={c.title}
                aspect="3 / 2"
                className="mb-4"
              />
              <div className="font-display" style={{ fontSize: "20px", letterSpacing: "-0.016em", fontWeight: 600, color: "var(--tqa-charcoal)" }}>
                {c.title}
              </div>
              <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--neutral-500)", marginTop: "6px" }}>
                {c.meta}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlaybooksBand() {
  const books = [
    { tag: "Meetings",   title: "How to speak up in meetings — five tiny habits to buy yourself time", pages: "8 pages" },
    { tag: "Saying no",  title: "How to say no, politely — five tactics", pages: "6 pages" },
    { tag: "Visibility", title: "How to introduce yourself in three sizes (S / M / L)", pages: "10 pages" },
  ];
  return (
    <section id="playbooks" style={{ padding: "112px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          <div className="lg:col-span-7">
            <SectionLabel number={8} label="Free playbooks" />
            <h2 className="font-display"
                style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.022em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px", textWrap: "balance" }}>
              Free playbooks for quiet achievers.
            </h2>
            <p className="font-sans" style={{ fontSize: "16px", color: "var(--neutral-700)", marginTop: "16px", maxWidth: "56ch", lineHeight: 1.6 }}>
              One PDF, one tiny habit. Every playbook gets an audio companion in Tim&rsquo;s voice — listen on your walk.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {books.map((b, i) => (
            <a key={i} href="#playbook" style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--tqa-paper)",
              border: "1px solid rgba(30,30,30,0.10)",
              borderRadius: "8px",
              padding: "28px 24px",
              textDecoration: "none",
              minHeight: "260px",
              justifyContent: "space-between",
            }}>
              <div>
                <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-ember)", fontWeight: 700 }}>
                  {b.tag}
                </div>
                <div className="font-display" style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.018em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "14px" }}>
                  {b.title}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--neutral-500)", textTransform: "uppercase" }}>
                  PDF · {b.pages} · 🎧 audio
                </div>
                <div className="font-sans inline-flex items-center gap-1.5 font-bold" style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tqa-ember)" }}>
                  Free <span aria-hidden>↓</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#playbooks-all" className="font-sans inline-flex items-center gap-2 font-semibold" style={{ fontSize: "14px", color: "var(--tqa-charcoal)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
            See all playbooks <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function NewsletterBand() {
  return (
    <section id="newsletter" style={{ padding: "120px 0", background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-sunrise)", fontWeight: 700 }}>
              Newsletter · weekly · audio included
            </div>
            <h2 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.98,
              letterSpacing: "-0.022em",
              fontWeight: 600,
              color: "var(--tqa-paper)",
              marginTop: "14px",
              textWrap: "balance",
            }}>
              <em style={{ fontStyle: "italic" }}>Tiny Habits</em> for Quiet Achievers.
            </h2>
            <p className="font-reading" style={{ fontSize: "18px", lineHeight: 1.55, color: "rgba(245,240,211,0.88)", marginTop: "18px", maxWidth: "52ch" }}>
              One short, useful email a week. One tiny habit at a time. No fluff. Audio version in Tim&rsquo;s voice. Unsubscribe anytime.
            </p>
          </div>
          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="font-sans flex-1"
                style={{
                  background: "var(--tqa-paper)",
                  color: "var(--tqa-charcoal)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0 16px",
                  height: "52px",
                  fontSize: "15px",
                  minWidth: "240px",
                  outline: "none",
                }}
              />
              <button type="submit" className="font-sans" style={{
                height: "52px",
                padding: "0 22px",
                background: "var(--tqa-ink)",
                color: "var(--tqa-paper)",
                border: "none",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
              }}>
                Subscribe →
              </button>
            </form>
            <div className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "rgba(245,240,211,0.65)", marginTop: "14px", textTransform: "uppercase" }}>
              Joining 8,400+ quiet achievers
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ElsewhereStrip() {
  const items = [
    { label: "Podcast", note: "Tim on other people's shows" },
    { label: "Speaking", note: "For event organisers" },
    { label: "LinkedIn", note: "Tim&rsquo;s longer essays" },
    { label: "YouTube", note: "Talks &amp; long-form" },
  ];
  return (
    <section style={{ padding: "80px 0", background: "var(--tqa-paper)" }}>
      <Container>
        <div className="font-mono uppercase mb-6" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--neutral-500)" }}>
          Tim elsewhere
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <a key={i} href="#elsewhere" style={{
              display: "block",
              borderTop: "1.5px solid var(--tqa-charcoal)",
              padding: "20px 0",
              textDecoration: "none",
              color: "var(--tqa-charcoal)",
            }}>
              <div className="font-display" style={{ fontSize: "26px", letterSpacing: "-0.018em", fontWeight: 600 }}>
                {it.label}
                <span style={{ fontSize: "0.7em", color: "var(--tqa-ember)", marginLeft: "6px" }}>→</span>
              </div>
              <div className="font-sans" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "6px" }}
                   dangerouslySetInnerHTML={{ __html: it.note }} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FooterRev() {
  const cols = [
    { h: "Coach", links: ["Coaching plans", "Chemistry call", "Speaking", "Contact"] },
    { h: "Read & listen", links: ["The book", "Newsletter", "Podcast", "Playbooks"] },
    { h: "Learn", links: ["The school", "Toni (AI coach)", "Free chapter", "Tiny Habits Checklist"] },
    { h: "About", links: ["Tim's story", "Press kit", "Terms", "Privacy"] },
  ];
  return (
    <footer style={{ background: "var(--tqa-ink-deep)", color: "var(--tqa-paper)", padding: "72px 0 48px" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-display" style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.018em", color: "var(--tqa-paper)" }}>
              Tim Yeo
            </div>
            <div className="font-display italic" style={{ fontSize: "16px", color: "var(--tqa-sunrise)", marginTop: "4px" }}>
              Introvert Coach
            </div>
            <p className="font-sans" style={{ fontSize: "14px", color: "rgba(245,240,211,0.7)", marginTop: "20px", lineHeight: 1.6, maxWidth: "36ch" }}>
              Coaching, a book, a school, a newsletter. All for quiet achievers who want impact at work — without pretending to be extroverts.
            </p>
            <div className="mt-8">
              <a href="#chemistrycall" className="font-sans inline-flex items-center gap-2" style={{
                background: "var(--tqa-ember)",
                color: "var(--tqa-paper)",
                padding: "12px 18px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}>
                Book a chemistry call <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="lg:col-span-2">
              <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-sunrise)", fontWeight: 700, marginBottom: "16px" }}>
                {c.h}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#footer" className="font-sans" style={{ color: "rgba(245,240,211,0.78)", fontSize: "14px", textDecoration: "none" }}
                       onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tqa-paper)")}
                       onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,211,0.78)")}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-16 pt-8" style={{ borderTop: "1px solid rgba(245,240,211,0.12)" }}>
          <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "rgba(245,240,211,0.55)" }}>
            © 2026 Tim Yeo · thequietachievr.com · Adelaide, SA
          </div>
          <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "rgba(245,240,211,0.55)" }}>
            Built quietly.
          </div>
        </div>
      </Container>
    </footer>
  );
}

function ToniBubble() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 60 }}>
      {open && (
        <div style={{
          width: "320px",
          background: "var(--tqa-paper)",
          border: "1px solid rgba(30,30,30,0.12)",
          borderRadius: "12px",
          padding: "18px",
          boxShadow: "0 24px 48px -12px rgba(30,30,30,0.30)",
          marginBottom: "12px",
        }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div style={{ width: "26px", height: "26px", borderRadius: "999px", background: "var(--tqa-sunrise)", color: "var(--tqa-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px" }}>T</div>
              <div className="font-sans" style={{ fontSize: "13px", fontWeight: 700, color: "var(--tqa-charcoal)" }}>Toni — AI coach</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: "transparent", border: "none", color: "var(--neutral-500)", cursor: "pointer", fontSize: "18px", lineHeight: 1 }}>×</button>
          </div>
          <div className="font-reading" style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--tqa-charcoal)", padding: "10px 12px", background: "var(--white)", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "10px" }}>
            Hi — what&rsquo;s on your mind? Ask me about a meeting, a piece of feedback, or any tiny habit from Tim&rsquo;s book.
          </div>
          <input
            type="text"
            placeholder="Ask Toni anything…"
            className="font-sans"
            style={{
              width: "100%",
              marginTop: "10px",
              border: "1px solid rgba(30,30,30,0.16)",
              borderRadius: "999px",
              padding: "10px 14px",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="font-sans" style={{
        background: "var(--tqa-ink)",
        color: "var(--tqa-paper)",
        border: "none",
        padding: "14px 18px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 12px 28px -8px rgba(30,30,30,0.40)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "var(--tqa-sunrise)", color: "var(--tqa-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px" }}>T</span>
        {open ? "Toni is here" : "Talk to Toni"}
      </button>
    </div>
  );
}

window.LatestWriting = LatestWriting;
window.StartHere = StartHere;
window.SchoolBlock = SchoolBlock;
window.PlaybooksBand = PlaybooksBand;
window.NewsletterBand = NewsletterBand;
window.ElsewhereStrip = ElsewhereStrip;
window.FooterRev = FooterRev;
window.ToniBubble = ToniBubble;
