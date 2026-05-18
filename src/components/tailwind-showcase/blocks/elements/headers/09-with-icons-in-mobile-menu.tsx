// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
  {
    name: 'Support',
    href: '#',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
  },
  { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]

export default function TailwindBlock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-paper">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="h-8 w-auto"
            />
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="h-8 w-auto not-dark:hidden"
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-charcoal">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-warm-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-paper shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-paper-soft"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-paper-soft group-hover:bg-paper">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-warm-500 group-hover:text-ember"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-charcoal">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-warm-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-charcoal/10/5 bg-paper-soft">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-charcoal hover:bg-paper-soft"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-warm-500" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-charcoal">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-charcoal">
            Marketplace
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-charcoal">
              Company
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-warm-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 rounded-3xl bg-paper p-4 shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {company.map((item) => (
                <div key={item.name} className="relative rounded-lg p-4 hover:bg-paper-soft">
                  <a href={item.href} className="block text-sm/6 font-semibold text-charcoal">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-sm/6 text-warm-500">{item.description}</p>
                </div>
              ))}
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-charcoal">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-paper sm:max-w-sm sm:ring-1 sm:ring-charcoal/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/assets/logo-tqa.jpg"
                  className="h-8 w-auto"
                />
                <img
                  alt=""
                  src="/assets/logo-tqa.jpg"
                  className="h-8 w-auto not-dark:hidden"
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
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-paper-soft group-hover:bg-paper">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-warm-500 group-hover:text-ember"
                        />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                  >
                    Marketplace
                  </a>

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-charcoal/10/5 bg-paper-soft text-center">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
