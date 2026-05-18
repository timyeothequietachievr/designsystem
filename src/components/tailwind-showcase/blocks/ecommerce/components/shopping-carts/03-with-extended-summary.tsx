// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-charcoal">Shopping Cart</h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-paper-200">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-24 rounded-lg object-cover sm:size-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-warm-700 hover:text-charcoal">
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-warm-500">{product.color}</p>
                          {product.size ? <p className="mt-1 text-sm text-warm-500">{product.size}</p> : null}
                        </div>

                        <p className="text-right text-sm font-medium text-charcoal">{product.price}</p>
                      </div>

                      <div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
                        <div className="inline-grid w-full max-w-16 grid-cols-1">
                          <select
                            name={`quantity-${productIdx}`}
                            aria-label={`Quantity, ${product.name}`}
                            className="col-start-1 row-start-1 appearance-none rounded-md bg-paper py-1.5 pr-8 pl-3 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-warm-500 sm:size-4"
                          />
                        </div>

                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-ember hover:text-indigo-500 sm:mt-3 sm:ml-0"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-warm-700">
                      {product.inStock ? (
                        <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                      ) : (
                        <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                      )}

                      <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="rounded-lg bg-paper-soft px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-warm-500">Subtotal</dt>
                    <dd className="font-medium text-charcoal">$99.00</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-warm-500">Shipping</dt>
                    <dd className="font-medium text-charcoal">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-warm-500">Tax</dt>
                    <dd className="font-medium text-charcoal">$8.32</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-charcoal">Order total</dt>
                    <dd className="text-base font-medium text-charcoal">$112.32</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-ember px-4 py-3 text-base font-medium text-paper shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-warm-500">
              <p>
                or{' '}
                <a href="#" className="font-medium text-ember hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
