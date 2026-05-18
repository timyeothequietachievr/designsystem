// @ts-nocheck
"use client";

const offers = [
  { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
  { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
  { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="flex flex-col border-b border-paper-200 lg:border-0">
        <nav aria-label="Offers" className="order-last lg:order-first">
          <div className="mx-auto max-w-7xl lg:px-8">
            <ul
              role="list"
              className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
            >
              {offers.map((offer) => (
                <li key={offer.name} className="flex flex-col">
                  <a
                    href={offer.href}
                    className="relative flex flex-1 flex-col justify-center bg-paper px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-warm-500">{offer.name}</p>
                    <p className="font-semibold text-charcoal">{offer.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="relative">
          <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-paper-soft lg:block" />
          <div className="relative bg-paper-soft lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl xl:text-6xl">
                    Focus on what matters
                  </h1>
                  <p className="mt-4 text-xl text-warm-500">
                    All the charts, datepickers, and notifications in the world can't beat checking off some items on a
                    paper card.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block rounded-md border border-transparent bg-ember px-8 py-3 font-medium text-paper hover:bg-indigo-700"
                    >
                      Shop Productivity
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
