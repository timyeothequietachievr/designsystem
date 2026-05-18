import { Container } from "@/components/ui/container";

export function IntroBand() {
  return (
    <div id="about" className="relative bg-ink text-paper">
      <Container className="relative py-20 sm:py-28">
        <p className="eyebrow mb-4 text-sunrise">Introducing</p>
        <h2
          className="display-headline font-bold"
          style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 0.98 }}
        >
          the Quiet Achiever
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/85">
          Tim Yeo has spent his career in rooms full of strong opinions and loud
          voices. A{" "}
          <a
            href="#"
            className="text-sunrise underline decoration-sunrise/60 underline-offset-4 hover:text-sunrise-soft"
          >
            designer and leader in startups for 18 years
          </a>
          , he&apos;s coached nearly a hundred introverts and has spoken at{" "}
          <a
            href="#"
            className="text-sunrise underline decoration-sunrise/60 underline-offset-4 hover:text-sunrise-soft"
          >
            international conferences
          </a>{" "}
          on the topic of{" "}
          <a
            href="#"
            className="text-sunrise underline decoration-sunrise/60 underline-offset-4 hover:text-sunrise-soft"
          >
            design leadership for introverts
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
