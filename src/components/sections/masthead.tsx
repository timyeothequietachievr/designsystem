import { Button } from "@/components/ui/button";

export function Masthead({
  onBuy,
  onWatch,
}: {
  onBuy?: () => void;
  onWatch?: () => void;
}) {
  return (
    <section className="overflow-hidden bg-paper py-20 lg:py-28">
      <div className="px-4 text-center">
        <div className="eyebrow mb-5 text-ember">Tim Yeo · New book</div>
        <h1
          className="display-headline font-bold text-charcoal"
          style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
        >
          The Quiet Achiever
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-display text-lg text-charcoal/80 md:text-xl">
          <em>Tiny habits to have impact at work</em>
          <span className="mt-1 block font-semibold text-ember-deep not-italic">
            (without pretending to be an extrovert)
          </span>
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={onBuy}>
            Buy the book
          </Button>
          <Button size="lg" variant="outline" onClick={onWatch}>
            ▶︎ Watch intro
          </Button>
        </div>
      </div>
    </section>
  );
}
