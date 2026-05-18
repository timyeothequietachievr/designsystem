// @ts-nocheck
"use client";

const incentives = [
  {
    name: 'Free Shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: '/assets/logo-tqa.jpg',
  },
  {
    name: '24/7 Customer Support',
    description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
    imageSrc: '/assets/logo-tqa.jpg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: '/assets/logo-tqa.jpg',
  },
  {
    name: 'Gift Cards',
    description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc: '/assets/logo-tqa.jpg',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper-soft">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
              <h3 className="mt-6 text-sm font-medium text-charcoal">{incentive.name}</h3>
              <p className="mt-2 text-sm text-warm-500">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
