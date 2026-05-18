// @ts-nocheck
"use client";

const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'High Wall Tote',
    href: '#',
    price: '$210',
    availability: 'Black and Orange',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with black canvas, black handles, and orange drawstring top.',
  },
  {
    id: 5,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'White and black',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 6,
    name: 'Zip High Wall Tote',
    href: '#',
    price: '$150',
    availability: 'White and blue',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-paper-soft object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 font-medium text-charcoal">{product.name}</h3>
              <p className="text-warm-500 italic">{product.availability}</p>
              <p className="mt-2 font-medium text-charcoal">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
