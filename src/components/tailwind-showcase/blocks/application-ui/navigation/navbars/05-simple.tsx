// @ts-nocheck
"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function TailwindBlock() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-paper shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
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
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-600 text-charcoal", Default: "border-transparent text-warm-500 hover:border-gray-300 hover:text-warm-700" */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-600 px-1 pt-1 text-sm font-medium text-charcoal"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-warm-500 hover:border-gray-300 hover:text-warm-700"
              >
                Team
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-warm-500 hover:border-gray-300 hover:text-warm-700"
              >
                Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-warm-500 hover:border-gray-300 hover:text-warm-700"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="relative rounded-full p-1 text-warm-500 hover:text-warm-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-paper py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-warm-500 hover:bg-paper-soft hover:text-warm-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-600">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-ember-100 border-indigo-600 text-indigo-700", Default: "border-transparent text-warm-500 hover:border-gray-300 hover:bg-paper-soft hover:text-warm-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-600 bg-ember-100 py-2 pr-4 pl-3 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-warm-500 hover:border-gray-300 hover:bg-paper-soft hover:text-warm-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-warm-500 hover:border-gray-300 hover:bg-paper-soft hover:text-warm-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-warm-500 hover:border-gray-300 hover:bg-paper-soft hover:text-warm-700"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-paper-200 pt-4 pb-3">
          <div className="flex items-center px-4">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-10 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-charcoal">Tom Cook</div>
              <div className="text-sm font-medium text-warm-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full p-1 text-warm-500 hover:text-warm-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-warm-500 hover:bg-paper-soft hover:text-charcoal"
            >
              Your profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-warm-500 hover:bg-paper-soft hover:text-charcoal"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block px-4 py-2 text-base font-medium text-warm-500 hover:bg-paper-soft hover:text-charcoal"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
