// @ts-nocheck
"use client";

const features = [
  {
    name: 'Sleek design',
    description:
      'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
  },
  { name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.' },
  {
    name: 'One-button control',
    description:
      'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
  },
  { name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter." },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-paper-200 pb-10">
              <h2 className="font-medium text-warm-500">Machined Kettle</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Elegant simplicity</p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-charcoal">{feature.name}</dt>
                  <dd className="mt-3 text-sm text-warm-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <img
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              src="/assets/logo-tqa.jpg"
              className="aspect-square w-full rounded-lg bg-paper-soft object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <img
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                src="/assets/logo-tqa.jpg"
                className="aspect-square w-full rounded-lg bg-paper-soft object-cover"
              />
              <img
                alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                src="/assets/logo-tqa.jpg"
                className="aspect-square w-full rounded-lg bg-paper-soft object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
