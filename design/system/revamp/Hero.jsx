/* Tim-forward hero — two variants */

/* Variant A — Editorial split. Display headline left, photo right with a sunrise
   color block behind. The "Tim-forward" decision: the man, the outcome, the
   pronunciation joke, two CTAs. */
function HeroEditorial() {
  return (
    <section style={{ paddingTop: "32px", paddingBottom: "96px" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Eyebrow tone="ember">Hi, I&rsquo;m Tim Yeo<sup style={{ fontSize: "10px", marginLeft: "2px" }}>*</sup></Eyebrow>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6.2vw, 84px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              I help <em style={{ color: "var(--tqa-ember)", fontStyle: "italic", fontWeight: 600 }}>quiet&nbsp;achievers</em> have <em style={{ color: "var(--tqa-ember)", fontStyle: "italic", fontWeight: 600 }}>impact at work</em>
              <span style={{ display: "block", color: "var(--tqa-ember-deep)", fontStyle: "italic", fontWeight: 400, fontSize: "0.55em", marginTop: "0.25em", letterSpacing: "-0.01em" }}>
                — without pretending to be an extrovert.
              </span>
            </h1>

            <p
              className="font-sans"
              style={{
                fontSize: "18px",
                lineHeight: 1.55,
                color: "var(--neutral-700)",
                marginTop: "28px",
                maxWidth: "56ch",
              }}
            >
              1:1 coaching, a book, and a school of practical tiny habits — built on 20+ years as a designer and design leader in tech, and over a thousand coaching conversations with introverts since 2021.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ marginTop: "36px" }}>
              <Button variant="primary" size="lg" href="#chemistrycall">
                Book a chemistry call
                <span aria-hidden>→</span>
              </Button>
              <a
                href="#checklist"
                className="font-sans font-medium text-[15px] inline-flex items-center gap-1.5"
                style={{ color: "var(--tqa-charcoal)", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "1px" }}
              >
                Or grab the Tiny Habits Checklist <span style={{ color: "var(--neutral-500)" }}>(free)</span>
              </a>
            </div>

            <p
              className="font-sans italic"
              style={{
                fontSize: "13px",
                color: "var(--neutral-500)",
                marginTop: "32px",
                maxWidth: "44ch",
                lineHeight: 1.5,
              }}
            >
              <span style={{ marginRight: "4px" }}>*</span> pronounced &ldquo;Yo&rdquo; &mdash; like &ldquo;Yo, what&rsquo;s up?&rdquo;
            </p>
          </div>

          {/* Right: photo with sunrise block + ink stripe */}
          <div className="lg:col-span-5 relative">
            <div className="relative" style={{ paddingTop: "8px" }}>
              {/* sunrise back block */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "20px -28px -28px 28px",
                  background: "var(--tqa-sunrise)",
                  borderRadius: "4px",
                  zIndex: 0,
                }}
              />
              {/* ink corner accent */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "60px",
                  bottom: "-44px",
                  left: "-20px",
                  background: "var(--tqa-ink)",
                  borderRadius: "4px",
                  zIndex: 0,
                }}
              />
              {/* photo */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 24px 48px -16px rgba(30,30,30,0.20)",
                  aspectRatio: "4 / 5",
                  background: "#2B2B52",
                }}
              >
                <img
                  src="assets/tim-masthead.jpg"
                  alt="Tim Yeo holding The Quiet Achiever on a country road"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%", display: "block" }}
                />
              </div>
              {/* caption tag */}
              <div
                className="font-sans"
                style={{
                  position: "absolute",
                  bottom: "-44px",
                  right: "-12px",
                  zIndex: 2,
                  background: "var(--tqa-paper-soft)",
                  border: "1px solid rgba(30,30,30,0.10)",
                  borderRadius: "4px",
                  padding: "10px 14px",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "var(--tqa-charcoal)",
                  boxShadow: "0 6px 14px -8px rgba(30,30,30,0.20)",
                }}
              >
                <span style={{ color: "var(--tqa-ember)" }}>●</span> &nbsp;Currently coaching from Adelaide
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


/* Variant B — Magazine cover. Photo is dominant; the headline overlays at the
   bottom-left in a cream block. Echoes the book-cover composition. */
function HeroMagazine() {
  return (
    <section style={{ paddingTop: "20px", paddingBottom: "80px" }}>
      <Container wide>
        <div className="relative">
          {/* eyebrow strip top */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Eyebrow tone="ember">Hi, I&rsquo;m Tim Yeo* &mdash; Introvert Coach</Eyebrow>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--neutral-500)" }}>
              Edition 01 &middot; Adelaide, SA &middot; April 2026
            </div>
          </div>

          {/* The frame */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "6px",
              background: "var(--tqa-ink)",
              minHeight: "640px",
            }}
          >
            <img
              src="assets/tim-masthead.jpg"
              alt="Tim Yeo holding The Quiet Achiever"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 22%",
              }}
            />
            {/* subtle dark wash bottom for text legibility */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(43,43,82,0) 40%, rgba(43,43,82,0.55) 100%)",
              }}
            />

            {/* Top-right plate: pronunciation joke */}
            <div
              className="font-sans"
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "var(--tqa-sunrise)",
                color: "var(--tqa-ink)",
                padding: "10px 14px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                maxWidth: "240px",
                lineHeight: 1.4,
              }}
            >
              <span style={{ display: "block", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "10px", marginBottom: "4px" }}>* Pronunciation</span>
              &ldquo;Yo&rdquo; &mdash; like &ldquo;Yo, what&rsquo;s up?&rdquo;
            </div>

            {/* Headline plate bottom-left */}
            <div
              style={{
                position: "absolute",
                left: "24px",
                right: "24px",
                bottom: "24px",
                maxWidth: "780px",
                background: "var(--tqa-paper)",
                padding: "32px 36px 30px",
                borderRadius: "4px",
                boxShadow: "0 12px 30px -12px rgba(0,0,0,0.30)",
              }}
            >
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(34px, 4.6vw, 60px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: "var(--tqa-charcoal)",
                  textWrap: "balance",
                }}
              >
                I help <em style={{ color: "var(--tqa-ember)", fontStyle: "italic", fontWeight: 600 }}>quiet&nbsp;achievers</em> have <em style={{ color: "var(--tqa-ember)", fontStyle: "italic", fontWeight: 600 }}>impact at work</em>
                <span style={{ display: "block", color: "var(--tqa-ember-deep)", fontStyle: "italic", fontWeight: 400, fontSize: "0.6em", marginTop: "0.2em" }}>
                  — without pretending to be an extrovert.
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-7">
                <Button variant="primary" size="lg" href="#chemistrycall">
                  Book a chemistry call
                  <span aria-hidden>→</span>
                </Button>
                <a
                  href="#checklist"
                  className="font-sans font-medium text-[15px] inline-flex items-center gap-1.5"
                  style={{ color: "var(--tqa-charcoal)", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "1px" }}
                >
                  Or grab the Tiny Habits Checklist <span style={{ color: "var(--neutral-500)" }}>(free)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sub-headline outside the frame */}
          <p
            className="font-sans mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "var(--neutral-700)",
              marginTop: "32px",
              maxWidth: "70ch",
              textAlign: "center",
            }}
          >
            1:1 coaching, a book, and a school of practical tiny habits — built on 20+ years as a designer and design leader in tech, and over a thousand coaching conversations with introverts since 2021.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* Variant C — Masthead full-bleed (alternate). Hero photo runs the full
   width of the page edge-to-edge as a true masthead, with the headline plate
   sitting below it in the cream surface. The photo IS the announcement. */
function HeroMasthead() {
  return (
    <section style={{ paddingTop: "0", paddingBottom: "80px" }}>
      {/* Full-bleed photo strip */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "min(78vh, 720px)",
          minHeight: "520px",
          background: "var(--tqa-ink)",
          overflow: "hidden",
        }}
      >
        <img
          src="assets/tim-masthead-bc.jpg"
          alt="Tim Yeo holding The Quiet Achiever on a country road outside Adelaide"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        {/* warm cream vignette top + bottom for type breathing */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(245,240,211,0.12) 0%, rgba(43,43,82,0) 18%, rgba(43,43,82,0) 70%, rgba(43,43,82,0.42) 100%)",
          }}
        />

        {/* Pronunciation plate top-right */}
        <div
          className="font-sans"
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            background: "var(--tqa-sunrise)",
            color: "var(--tqa-ink)",
            padding: "10px 14px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 700,
            maxWidth: "240px",
            lineHeight: 1.4,
            boxShadow: "0 8px 20px -10px rgba(0,0,0,0.30)",
          }}
        >
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: "10px",
              marginBottom: "4px",
            }}
          >
            * Pronunciation
          </span>
          &ldquo;Yo&rdquo; &mdash; like &ldquo;Yo, what&rsquo;s up?&rdquo;
        </div>

        {/* Caption strip bottom-left */}
        <div
          className="font-mono"
          style={{
            position: "absolute",
            bottom: "22px",
            left: "28px",
            color: "var(--tqa-paper)",
            fontSize: "11px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            fontWeight: 700,
            background: "rgba(43,43,82,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: "8px 14px",
            borderRadius: "4px",
          }}
        >
          <span style={{ color: "var(--tqa-sunrise)" }}>●</span>&nbsp;&nbsp;Adelaide, South Australia &middot; April 2026
        </div>
      </div>

      {/* Headline plate sits just below the photo, in the cream surface */}
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          style={{ marginTop: "56px" }}
        >
          <div className="lg:col-span-8">
            <Eyebrow tone="ember">
              Hi, I&rsquo;m Tim Yeo
              <sup style={{ fontSize: "10px", marginLeft: "2px" }}>*</sup>
              &nbsp;&middot;&nbsp;Introvert Coach
            </Eyebrow>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                marginTop: "20px",
                textWrap: "balance",
              }}
            >
              I help{" "}
              <em
                style={{
                  color: "var(--tqa-ember)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                quiet&nbsp;achievers
              </em>{" "}
              have{" "}
              <em
                style={{
                  color: "var(--tqa-ember)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                impact at work
              </em>
              <span
                style={{
                  display: "block",
                  color: "var(--tqa-ember-deep)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "0.55em",
                  marginTop: "0.25em",
                  letterSpacing: "-0.01em",
                }}
              >
                — without pretending to be an extrovert.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <p
              className="font-sans"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "var(--neutral-700)",
                maxWidth: "44ch",
              }}
            >
              1:1 coaching, a book, and a school of practical tiny habits — built on 20+ years as a designer and design leader in tech, and over a thousand coaching conversations with introverts since 2021.
            </p>
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ marginTop: "28px" }}
            >
              <Button variant="primary" size="lg" href="#chemistrycall">
                Book a chemistry call
                <span aria-hidden>→</span>
              </Button>
            </div>
            <a
              href="#checklist"
              className="font-sans font-medium text-[14px] inline-flex items-center gap-1.5"
              style={{
                color: "var(--tqa-charcoal)",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "1px",
                marginTop: "16px",
              }}
            >
              Or grab the Tiny Habits Checklist{" "}
              <span style={{ color: "var(--neutral-500)" }}>(free)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.HeroEditorial = HeroEditorial;
window.HeroMagazine = HeroMagazine;
window.HeroMasthead = HeroMasthead;

/* Variant D — Portrait split. Copy + CTAs on the left over a deep ink panel,
   cropped portrait on the right against a warm sunrise gradient backdrop.
   Inspired by reference: bold headline with one-line accent in ember,
   bullet checklist of outcomes, two CTAs, stat plate floating bottom of the
   portrait. */
function HeroPortraitSplit() {
  const outcomes = [
    "Speak up in meetings",
    "Get promoted on your terms",
    "Have the hard conversations",
    "Lead a quiet team well",
  ];
  return (
    <section style={{ paddingTop: "12px", paddingBottom: "0" }}>
      <Container wide>
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{
            background: "var(--tqa-ink-deep)",
            borderRadius: "10px",
            overflow: "hidden",
            minHeight: "640px",
          }}
        >
          {/* LEFT: copy on ink-deep */}
          <div
            className="lg:col-span-7"
            style={{ padding: "clamp(36px, 5vw, 72px)", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div
              className="font-sans inline-flex items-center gap-2"
              style={{
                alignSelf: "flex-start",
                background: "rgba(213,74,47,0.18)",
                color: "var(--tqa-ember)",
                border: "1px solid rgba(213,74,47,0.45)",
                borderRadius: "999px",
                padding: "6px 14px",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "var(--tqa-ember)" }}>●</span>
              Now accepting chemistry calls
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5.4vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "var(--tqa-paper)",
                marginTop: "24px",
                textWrap: "balance",
              }}
            >
              I help{" "}
              <span style={{ color: "var(--tqa-paper)" }}>quiet&nbsp;achievers</span>
              <span style={{ display: "block", color: "var(--tqa-ember)", fontStyle: "italic", fontWeight: 600 }}>
                have impact at work.
              </span>
            </h1>

            <p
              className="font-sans"
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: "rgba(245,240,211,0.78)",
                marginTop: "20px",
                maxWidth: "52ch",
              }}
            >
              Without pretending to be an extrovert. 1:1 coaching, a book and a school of practical tiny habits — built on 20+ years in tech and over a thousand coaching conversations since 2021.
            </p>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
              style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}
            >
              {outcomes.map((o) => (
                <li
                  key={o}
                  className="font-sans"
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,211,0.85)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "999px",
                      border: "1.5px solid var(--tqa-sunrise)",
                      color: "var(--tqa-sunrise)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {o}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3" style={{ marginTop: "32px" }}>
              <a
                href="#chemistrycall"
                className="font-sans inline-flex items-center gap-2"
                style={{
                  background: "var(--tqa-ember)",
                  color: "var(--tqa-paper)",
                  padding: "0 22px",
                  height: "52px",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--tqa-ember-deep)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--tqa-ember)")}
              >
                Book a chemistry call <span aria-hidden>→</span>
              </a>
              <a
                href="#playbooks"
                className="font-sans inline-flex items-center gap-2"
                style={{
                  background: "transparent",
                  color: "var(--tqa-paper)",
                  padding: "0 22px",
                  height: "52px",
                  borderRadius: "4px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  border: "1.5px solid rgba(245,240,211,0.30)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--tqa-paper)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,240,211,0.30)"; }}
              >
                Free playbooks <span aria-hidden style={{ fontSize: "12px" }}>↗</span>
              </a>
            </div>

            <div
              className="font-sans italic"
              style={{ fontSize: "12px", color: "rgba(245,240,211,0.55)", marginTop: "24px" }}
            >
              * Tim Yeo, pronounced &ldquo;Yo&rdquo; — like &ldquo;Yo, what&rsquo;s up?&rdquo;
            </div>
          </div>

          {/* RIGHT: portrait on warm gradient backdrop */}
          <div
            className="lg:col-span-5"
            style={{ position: "relative", padding: "clamp(20px, 2.5vw, 36px)", minHeight: "520px" }}
          >
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: "480px",
                borderRadius: "8px",
                overflow: "hidden",
                background:
                  "radial-gradient(120% 100% at 50% 30%, #F5C84B 0%, #E5A402 35%, #D54A2F 78%, #8A2A1C 100%)",
              }}
            >
              <img
                src="assets/tim-masthead-bc.jpg"
                alt="Tim Yeo holding The Quiet Achiever"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "0",
                  height: "100%",
                  width: "auto",
                  minWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center 18%",
                  transform: "translateX(-50%)",
                  mixBlendMode: "normal",
                }}
              />

              {/* Stat plate — floating */}
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  right: "16px",
                  bottom: "16px",
                  background: "rgba(26,26,58,0.78)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "6px",
                  padding: "16px 20px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "26px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--tqa-paper)",
                      lineHeight: 1,
                    }}
                  >
                    1,000<span style={{ color: "var(--tqa-sunrise)" }}>+</span>
                  </div>
                  <div
                    className="font-mono uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "rgba(245,240,211,0.7)",
                      marginTop: "4px",
                      fontWeight: 700,
                    }}
                  >
                    Introverts coached
                  </div>
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "26px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--tqa-paper)",
                      lineHeight: 1,
                    }}
                  >
                    20<span style={{ color: "var(--tqa-sunrise)" }}>yrs</span>
                  </div>
                  <div
                    className="font-mono uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "rgba(245,240,211,0.7)",
                      marginTop: "4px",
                      fontWeight: 700,
                    }}
                  >
                    Design leader in tech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.HeroPortraitSplit = HeroPortraitSplit;
