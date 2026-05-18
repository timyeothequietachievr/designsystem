// @ts-nocheck
"use client";

const products = [
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-ember">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">It's on the way!</p>
          <p className="mt-2 text-base text-warm-500">Your order #14034056 has shipped and will be with you soon.</p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-charcoal">Tracking number</dt>
            <dd className="mt-2 text-ember">51547878755545848512</dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-paper-200">
          <h2 className="sr-only">Your order</h2>

          <h3 className="sr-only">Items</h3>
          {products.map((product) => (
            <div key={product.id} className="flex space-x-6 border-b border-paper-200 py-10">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="size-20 flex-none rounded-lg bg-paper-soft object-cover sm:size-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-charcoal">
                    <a href={product.href}>{product.name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-warm-500">{product.description}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex divide-x divide-gray-200 text-sm">
                    <div className="flex pr-4 sm:pr-6">
                      <dt className="font-medium text-charcoal">Quantity</dt>
                      <dd className="ml-2 text-warm-700">{product.quantity}</dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-charcoal">Price</dt>
                      <dd className="ml-2 text-warm-700">{product.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-charcoal">Shipping address</dt>
                <dd className="mt-2 text-warm-700">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Billing address</dt>
                <dd className="mt-2 text-warm-700">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
            </dl>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-paper-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-charcoal">Payment method</dt>
                <dd className="mt-2 text-warm-700">
                  <p>Apple Pay</p>
                  <p>Mastercard</p>
                  <p>
                    <span aria-hidden="true">••••</span>
                    <span className="sr-only">Ending in </span>1545
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Shipping method</dt>
                <dd className="mt-2 text-warm-700">
                  <p>DHL</p>
                  <p>Takes up to 3 working days</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-paper-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-charcoal">Subtotal</dt>
                <dd className="text-warm-700">$36.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-charcoal">
                  Discount
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-warm-500">STUDENT50</span>
                </dt>
                <dd className="text-warm-700">-$18.00 (50%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-charcoal">Shipping</dt>
                <dd className="text-warm-700">$5.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-charcoal">Total</dt>
                <dd className="text-charcoal">$23.00</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
