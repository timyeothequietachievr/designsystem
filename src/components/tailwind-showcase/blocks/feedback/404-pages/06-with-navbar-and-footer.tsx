// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const footer = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function TailwindBlock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 lg:px-8">
          <nav aria-label="Global" className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/assets/logo-tqa.jpg"
                  className="h-8"
                />
                <img
                  alt=""
                  src="/assets/logo-tqa.jpg"
                  className="h-8 not-dark:hidden"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-warm-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-charcoal">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-charcoal">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-paper p-6 sm:max-w-sm sm:ring-1 sm:ring-charcoal/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/assets/logo-tqa.jpg"
                    className="h-8"
                  />
                  <img
                    alt=""
                    src="/assets/logo-tqa.jpg"
                    className="h-8 not-dark:hidden"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-warm-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-paper-200/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-charcoal hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
          <p className="text-base/8 font-semibold text-ember">404</p>
          <h1 className="mt-4 text-5xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-warm-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <a href="#" className="text-sm/7 font-semibold text-ember">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" className="border-t border-paper-200">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <img
                alt="Company name"
                src="/assets/logo-tqa.jpg"
                className="h-7"
              />
              <img
                alt="Company name"
                src="/assets/logo-tqa.jpg"
                className="h-7 not-dark:hidden"
              />
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm/6 font-semibold text-charcoal">Solutions</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footer.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm/6 text-warm-500 hover:text-charcoal"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm/6 font-semibold text-charcoal">Support</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footer.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm/6 text-warm-500 hover:text-charcoal"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm/6 font-semibold text-charcoal">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footer.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm/6 text-warm-500 hover:text-charcoal"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm/6 font-semibold text-charcoal">Legal</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footer.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm/6 text-warm-500 hover:text-charcoal"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
