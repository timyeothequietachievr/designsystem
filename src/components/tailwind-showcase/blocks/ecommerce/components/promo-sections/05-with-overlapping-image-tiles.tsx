// @ts-nocheck
"use client";

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Woman wearing an off-white cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Man wearing a charcoal gray cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]

export default function TailwindBlock() {
  return (
    <div className="relative bg-paper">
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-ink">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-ink opacity-50" />
        </div>
        <div className="h-32 w-full bg-paper md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-ink">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-ink opacity-50" />
          </div>
          <div className="h-48 w-full bg-paper" />
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-bold tracking-tight text-paper sm:text-5xl md:text-6xl">Mid-Season Sale</h1>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-ember px-8 py-3 font-medium text-paper hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>

      <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 rounded-lg bg-paper shadow-xl sm:aspect-4/5 sm:h-auto"
            >
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <img alt={collection.imageAlt} src={collection.imageSrc} className="size-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-paper">
                    Shop the collection
                  </p>
                  <h3 className="mt-1 font-semibold text-paper">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
