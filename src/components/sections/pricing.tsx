import { BOOK_OFFERS } from "@/lib/site-data";

type Offer = (typeof BOOK_OFFERS)[number];

function PricingCard({
  offer,
  onBuy,
}: {
  offer: Offer;
  onBuy?: (name: string) => void;
}) {
  return (
    <div className="relative flex flex-col gap-6 rounded-lg border border-paper-200 bg-paper p-8 shadow-sm">
      {"badge" in offer && offer.badge && (
        <small className="absolute top-0 -translate-y-1/2 rounded-full bg-sunrise px-4 py-1.5 text-xs font-bold tracking-wider2 text-ink-deep uppercase">
          {offer.badge}
        </small>
      )}
      <header className="flex flex-col gap-3">
        <h3 className="eyebrow text-charcoal">{offer.subheading}</h3>
        <h4 className="flex items-baseline gap-2">
          <span
            className="display-headline font-bold tracking-tight text-charcoal"
            style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            {offer.price}
          </span>
          {offer.suffix && (
            <span className="text-sm font-semibold text-warm-500">
              {offer.suffix}
            </span>
          )}
        </h4>
      </header>
      <section className="flex-1">
        <ul role="list" className="space-y-4">
          {offer.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 text-sm leading-6 text-warm-700"
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <button
          type="button"
          onClick={() => onBuy?.(offer.subheading)}
          className="w-full rounded bg-ember px-5 py-3 text-sm font-semibold tracking-wide text-paper hover:bg-ember-deep"
        >
          {offer.cta}
        </button>
      </footer>
    </div>
  );
}

export function PricingSection({ onBuy }: { onBuy?: (name: string) => void }) {
  return (
    <div className="bg-paper-soft px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4 text-ember">Pricing</p>
        <h2
          className="display-headline font-bold text-charcoal"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          eBook and audiobook
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {BOOK_OFFERS.map((offer) => (
            <PricingCard key={offer.subheading} offer={offer} onBuy={onBuy} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-ember"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
