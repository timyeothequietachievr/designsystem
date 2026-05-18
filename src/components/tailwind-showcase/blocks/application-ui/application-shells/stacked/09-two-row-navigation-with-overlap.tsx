// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-paper-soft">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <header className="bg-ember pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex items-center justify-center py-5 lg:justify-between">
              {/* Logo */}
              <div className="absolute left-0 shrink-0 lg:static">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    src="/assets/logo-tqa.jpg"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Right section on desktop */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                <button
                  type="button"
                  className="relative shrink-0 rounded-full p-1 text-indigo-200 hover:text-paper focus:outline-2 focus:outline-white"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 shrink-0">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 -mr-2 w-48 origin-top-right rounded-md bg-paper py-1 shadow-lg outline outline-black/5 data-leave:transition data-leave:duration-75 data-leave:ease-in data-closed:data-leave:scale-95 data-closed:data-leave:transform data-closed:data-leave:opacity-0"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>

              {/* Search */}
              <div className="min-w-0 flex-1 px-12 lg:hidden">
                <div className="mx-auto grid w-full max-w-xs grid-cols-1">
                  <input
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-ember/75 py-1.5 pr-3 pl-10 text-base text-paper outline-1 -outline-offset-1 outline-white/10 placeholder:text-paper/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-paper/75"
                  />
                </div>
              </div>

              {/* Menu button */}
              <div className="absolute right-0 shrink-0 lg:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => setOpen(true)}
                  className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-paper/5 hover:text-paper focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>
            <div className="hidden border-t border-white/20 py-5 lg:block">
              <div className="grid grid-cols-3 items-center gap-8">
                <div className="col-span-2">
                  <nav className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'text-paper' : 'text-indigo-100',
                          'rounded-md px-3 py-2 text-sm font-medium hover:bg-ember/75',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mx-auto grid w-full max-w-md grid-cols-1">
                  <input
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-ember/75 py-1.5 pr-3 pl-10 text-base text-paper outline-1 -outline-offset-1 outline-white/10 placeholder:text-paper/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-paper/75"
                  />
                </div>
              </div>
            </div>
          </div>

          <Dialog open={open} onClose={setOpen} className="lg:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 z-20 bg-black/25 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
            />

            <DialogPanel
              transition
              className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
            >
              <div className="divide-y divide-gray-200 rounded-lg bg-paper shadow-lg outline outline-black/5">
                <div className="pt-3 pb-2">
                  <div className="flex items-center justify-between px-4">
                    <div>
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
                    <div className="-mr-2">
                      <button
                        onClick={() => setOpen(false)}
                        className="relative inline-flex items-center justify-center rounded-md bg-paper p-2 text-warm-500 hover:bg-paper-soft hover:text-warm-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-white"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                    >
                      Resources
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                    >
                      Company Directory
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                    >
                      Openings
                    </a>
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <div className="flex items-center px-5">
                    <div className="shrink-0">
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="size-10 rounded-full outline -outline-offset-1 outline-black/5"
                      />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <div className="truncate text-base font-medium text-charcoal">{user.name}</div>
                      <div className="truncate text-sm font-medium text-warm-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto shrink-0 rounded-full p-1 text-warm-500 hover:text-warm-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-charcoal hover:bg-paper-soft hover:text-charcoal"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 id="section-1-title" className="sr-only">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-paper shadow-sm">
                    <div className="p-6">{/* Your content */}</div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 id="section-2-title" className="sr-only">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-paper shadow-sm">
                    <div className="p-6">{/* Your content */}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-paper-200 py-8 text-center text-sm text-warm-500 sm:text-left">
              <span className="block sm:inline">&copy; 2021 Your Company, Inc.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
