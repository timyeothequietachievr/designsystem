import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function BookHero({ onBuy }: { onBuy?: () => void }) {
  return (
    <div id="book" className="relative overflow-hidden bg-paper-soft pt-16 pb-24">
      <Container>
        <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">
            <div className="eyebrow mb-4 text-ember">Being a quiet achiever</div>
            <h2
              className="display-headline font-bold text-charcoal"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
              }}
            >
              ...in a noisy world is hard.
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-warm-700">
              <p>Do people say &ldquo;you are too quiet&rdquo; or &ldquo;you should speak up more&rdquo;?</p>
              <p>Is small talk and networking awkward for you?</p>
              <p>
                In meetings, do you keep quiet — even though you have something to
                say?
              </p>
              <p>
                Most quiet achievers struggle in silence, or pretend to be
                extroverts.
              </p>
              <p>
                <strong className="text-charcoal">
                  Life is too short to be living someone else&apos;s version of
                  success.
                </strong>
              </p>
              <p className="font-semibold text-ember-deep">
                Stop pretending. Start practicing. Remain your true, authentic
                self.
              </p>
            </div>
            <div className="mt-8">
              <Button onClick={onBuy}>Buy the book</Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image
              src="/assets/book-cover.jpg"
              alt="The Quiet Achiever book cover"
              width={600}
              height={750}
              className="mx-auto w-full max-w-md rounded-md shadow-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
