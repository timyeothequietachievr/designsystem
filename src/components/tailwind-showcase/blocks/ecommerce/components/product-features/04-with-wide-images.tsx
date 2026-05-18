// @ts-nocheck
"use client";

const features = [
  {
    name: 'Adventure-ready',
    description:
      'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Minimal and clean',
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Organized',
    description:
      'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-warm-500">Drawstring Canister</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Use it your way</p>
            <p className="mt-4 text-warm-500">
              The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day.
              Shoulder sling it, backpack it, or handy carry it.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-paper-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-charcoal">{feature.name}</h3>
                  <p className="mt-2 text-sm text-warm-500">{feature.description}</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="aspect-5/2 w-full rounded-lg bg-paper-soft object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
