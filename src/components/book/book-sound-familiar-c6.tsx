/** c6 — revamp / sound-familiar */
import { Container } from "@/components/revamp/primitives";

const PAIN_POINTS = [
  'Do people say "you are too quiet" or "you should speak up more", but you don\'t know how?',
  "Is small talk and networking awkward for you?",
  "In meetings, do you keep quiet even though you have something to say?",
  "When put on the spot, does your mind go blank? Only to have the perfect idea come to your mind 10 minutes later?",
  "Do you avoid public speaking and give away opportunities to present your work?",
  'Do you say "yes" to unreasonable requests even though, in your head, you think "no"?',
  'Have you been passed over for jobs and promotions because "you are not ready" or you don\'t have "leadership presence"?',
  "Do you shy away from difficult conversations? But later, wish you spoke up?",
  "Do you act like an extrovert at work but you are tired of pretending?",
  "Have read self help books to improve yourself, but all they did was make you feel good but you don't know what to do next?",
];

export function BookSoundFamiliarC6() {
  return (
    <section id="sound-familiar" data-component-code="c6" style={{ padding: "72px 0" }}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.4vw, 60px)",
                lineHeight: 1.0,
                letterSpacing: "-0.022em",
                fontWeight: 600,
                color: "var(--tqa-charcoal)",
                textWrap: "balance",
              }}
            >
              Being a quiet achiever in{" "}
              <span style={{ color: "var(--tqa-ember)" }}>a loud, noisy world</span> is hard
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {PAIN_POINTS.map((line, i) => (
                <li
                  key={i}
                  className="font-reading"
                  style={{
                    fontSize: "20px",
                    lineHeight: 1.4,
                    color: "var(--tqa-charcoal)",
                    padding: "14px 0",
                    borderTop: i === 0 ? "1px solid rgba(30,30,30,0.12)" : "none",
                    borderBottom: "1px solid rgba(30,30,30,0.12)",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
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
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <p
              className="font-display mt-6 text-xl font-bold italic"
              style={{ color: "var(--tqa-ink)" }}
            >
              👉🏻 If your answer is YES, this book is for you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
