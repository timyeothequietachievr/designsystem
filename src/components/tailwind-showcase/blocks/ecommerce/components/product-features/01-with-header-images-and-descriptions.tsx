// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper-soft">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-warm-500">
              Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
              all-day adventures, long shifts at work, and tough travel schedules.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <img
                alt="Drawstring top with elastic loop closure and textured interior padding."
                src="/assets/logo-tqa.jpg"
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <p className="mt-8 text-base text-warm-500">
                The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                combination of on-the-go treats that your heart desires. Yes, we did the math.
              </p>
            </div>
            <div>
              <img
                alt="Front zipper pouch with included key ring."
                src="/assets/logo-tqa.jpg"
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <p className="mt-8 text-base text-warm-500">
                Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                for even the most unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
