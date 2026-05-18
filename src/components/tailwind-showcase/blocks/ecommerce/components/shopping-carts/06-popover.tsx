// @ts-nocheck
"use client";

import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const navigation = [
  { name: 'Women', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Stores', href: '#' },
]
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Zip Tote Basket',
    href: '#',
    color: 'White and black',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
]

export default function TailwindBlock() {
  return (
    <header className="relative bg-paper">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-paper-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/assets/logo-tqa.jpg"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 overflow-x-auto border-t border-paper-200 sm:static sm:border-t-0">
              <div className="flex h-14 items-center space-x-8 px-4 sm:h-auto">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-medium text-warm-700 hover:text-charcoal">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              {/* Search */}
              <a href="#" className="p-2 text-warm-500 hover:text-warm-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </a>

              {/* Cart */}
              <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                <PopoverButton className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-warm-500 group-hover:text-warm-500"
                  />
                  <span className="ml-2 text-sm font-medium text-warm-700 group-hover:text-charcoal">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute top-16 right-0 z-10 mt-px w-full bg-paper pb-6 shadow-lg transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:px-2 lg:top-full lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black/5"
                >
                  <h2 className="sr-only">Shopping Cart</h2>

                  <form className="mx-auto max-w-2xl px-4">
                    <ul role="list" className="divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex items-center py-6">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="size-16 flex-none rounded-md border border-paper-200"
                          />
                          <div className="ml-4 flex-auto">
                            <h3 className="font-medium text-charcoal">
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="text-warm-500">{product.color}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-ember px-4 py-2 text-sm font-medium text-paper shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                    >
                      Checkout
                    </button>

                    <p className="mt-6 text-center">
                      <a href="#" className="text-sm font-medium text-ember hover:text-indigo-500">
                        View Shopping Bag
                      </a>
                    </p>
                  </form>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
