// @ts-nocheck
"use client";

const features = [
  {
    name: 'Three card types',
    description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
  },
  {
    name: 'The perfect mix',
    description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Green cardstock box open with 50 cards inside.',
  },
  {
    name: 'Dot grid backs',
    description: 'Flip a card over to doodle during meetings when you should be listening.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
  },
  {
    name: 'Refill packs',
    description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h2 id="features-heading" className="font-medium text-warm-500">
            Focus
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Simple productivity</p>
          <p className="mt-4 text-warm-500">
            Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting
            digital apps and embrace these small, sturdy pieces of paper.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-charcoal">{feature.name}</h3>
                <p className="mt-2 text-sm text-warm-500">{feature.description}</p>
              </div>
              <img
                alt={feature.imageAlt}
                src={feature.imageSrc}
                className="aspect-square w-full rounded-lg bg-paper-soft object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
