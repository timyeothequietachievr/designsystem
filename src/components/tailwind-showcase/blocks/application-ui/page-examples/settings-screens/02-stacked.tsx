// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
  { name: 'General', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan', href: '#', icon: CubeIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-charcoal/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 p-3 md:hidden">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-5 text-charcoal" />
            </button>
            <img
              alt="Your Company"
              src="/assets/logo-tqa.jpg"
              className="h-8 w-auto"
            />
            <img
              alt="Your Company"
              src="/assets/logo-tqa.jpg"
              className="h-8 w-auto not-dark:hidden"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-warm-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-warm-500 hover:text-warm-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
              />
            </a>
          </div>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-paper px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-charcoal/10">
            <div className="relative -ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-warm-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
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
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-charcoal hover:bg-paper-soft"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">General Settings</h1>

        <aside className="flex overflow-x-auto border-b border-charcoal/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-paper-soft text-ember'
                        : 'text-warm-700 hover:bg-paper-soft hover:text-ember',
                      'group flex gap-x-3 rounded-md py-2 pr-3 pl-2 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? 'text-ember'
                          : 'text-warm-500 group-hover:text-ember',
                        'size-6 shrink-0',
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base/7 font-semibold text-charcoal">Profile</h2>
              <p className="mt-1 text-sm/6 text-warm-500">
                This information will be displayed publicly so be careful what you share.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-paper-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-charcoal">Tom Cook</div>
                    <button
                      type="button"
                      className="font-semibold text-ember hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">
                    Email address
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-charcoal">tom.cook@example.com</div>
                    <button
                      type="button"
                      className="font-semibold text-ember hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">Title</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-charcoal">Human Resources Manager</div>
                    <button
                      type="button"
                      className="font-semibold text-ember hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-charcoal">Bank accounts</h2>
              <p className="mt-1 text-sm/6 text-warm-500">Connect bank accounts to your account.</p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-paper-200 text-sm/6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-charcoal">TD Canada Trust</div>
                  <button
                    type="button"
                    className="font-semibold text-ember hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-charcoal">Royal Bank of Canada</div>
                  <button
                    type="button"
                    className="font-semibold text-ember hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-ember hover:text-indigo-500"
                >
                  <span aria-hidden="true">+</span> Add another bank
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-charcoal">Integrations</h2>
              <p className="mt-1 text-sm/6 text-warm-500">Connect applications to your account.</p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-paper-200 text-sm/6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-charcoal">QuickBooks</div>
                  <button
                    type="button"
                    className="font-semibold text-ember hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-ember hover:text-indigo-500"
                >
                  <span aria-hidden="true">+</span> Add another application
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-charcoal">Language and dates</h2>
              <p className="mt-1 text-sm/6 text-warm-500">
                Choose what language and date format to use throughout your account.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-paper-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">Language</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-charcoal">English</div>
                    <button
                      type="button"
                      className="font-semibold text-ember hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">
                    Date format
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-charcoal">DD-MM-YYYY</div>
                    <button
                      type="button"
                      className="font-semibold text-ember hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="flex pt-6">
                  <dt className="font-medium text-charcoal sm:w-64 sm:flex-none sm:pr-6">
                    Automatic timezone
                  </dt>
                  <dd className="flex flex-auto items-center justify-end">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-charcoal/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-ember has-focus-visible:outline-2">
                      <span className="size-4 rounded-full bg-paper shadow-xs ring-1 ring-charcoal/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                      <input
                        defaultChecked
                        name="automatic-timezone"
                        type="checkbox"
                        aria-label="Automatic timezone"
                        className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                      />
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
