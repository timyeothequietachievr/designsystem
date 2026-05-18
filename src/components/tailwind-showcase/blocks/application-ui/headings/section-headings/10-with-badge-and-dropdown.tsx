// @ts-nocheck
"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-base font-semibold text-charcoal">
            Full-Stack Developer
          </h1>
          <p className="mt-1 truncate text-sm text-warm-500">Checkout and Payments Team</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
            Open
          </span>
          <div className="-my-2 ml-3 inline-block text-left">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center rounded-full p-2 text-warm-500 hover:text-warm-500 focus-visible:outline-2 focus-visible:outline-ember">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="flex justify-between px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                    >
                      <span>Edit</span>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="flex justify-between px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                    >
                      <span>Duplicate</span>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="flex w-full justify-between px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                    >
                      <span>Archive</span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}
