export function TestimonialSection() {
  return (
    <section className="overflow-hidden bg-paper-soft">
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="hidden lg:block lg:shrink-0">
            <div
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #E5A402 0%, #D54A2F 70%)",
              }}
              aria-hidden
            />
          </div>
          <div className="relative flex-1">
            <p className="eyebrow mb-2 text-ember">Testimonials</p>
            <h2
              className="display-headline mb-8 font-bold text-charcoal"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              What people are saying
            </h2>
            <span
              aria-hidden
              className="pointer-events-none absolute top-[-40px] left-[-30px] font-display text-[220px] leading-[0.7] font-bold text-ember select-none"
              style={{ opacity: 0.12 }}
            >
              &ldquo;
            </span>
            <blockquote className="relative">
              <p
                className="font-display text-charcoal italic"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  lineHeight: 1.35,
                  fontWeight: 500,
                }}
              >
                Tim gave me incredible advice and methods I could use in real-life
                scenarios. He showed me how to build confidence to speak up in
                uncomfortable situations. I highly recommend.
              </p>
              <footer className="mt-8">
                <p className="eyebrow text-charcoal">Ezra Ju</p>
                <p className="mt-1 text-sm font-semibold text-ember-deep">
                  Product Designer, Domain
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
