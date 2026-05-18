// @ts-nocheck
"use client";

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'Zip High Wall Tote',
    color: 'White and blue',
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.',
    price: '$150',
  },
  {
    id: 3,
    name: 'Halfsize Tote',
    color: 'Clay',
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of tote with monochrome natural canvas body, straps, roll top, and handles.',
    price: '$210',
  },
  {
    id: 4,
    name: 'High Wall Tote',
    color: 'Black and orange',
    href: '#',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with black canvas, black handles, and orange drawstring top.',
    price: '$210',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-charcoal">Customers also bought</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-charcoal">{product.name}</h3>
                  <p className="mt-1 text-sm text-warm-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-paper">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-paper-soft px-8 py-2 text-sm font-medium text-charcoal hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
