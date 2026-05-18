// @ts-nocheck
"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-between gap-x-8 lg:mx-0">
        <div className="flex items-center gap-x-6">
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="size-16 flex-none rounded-full outline outline-gray-900/10"
          />
          <h1>
            <div className="text-sm/6 text-warm-500">
              Invoice <span className="text-warm-700">#00011</span>
            </div>
            <div className="mt-1 text-base font-semibold text-charcoal">Tuple, Inc</div>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <button type="button" className="hidden text-sm/6 font-semibold text-charcoal sm:block">
            Copy URL
          </button>
          <a href="#" className="hidden text-sm/6 font-semibold text-charcoal sm:block">
            Edit
          </a>
          <a
            href="#"
            className="rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Send
          </a>

          <Menu as="div" className="relative sm:hidden">
            <MenuButton className="relative block">
              <span className="absolute -inset-3" />
              <span className="sr-only">More</span>
              <EllipsisVerticalIcon aria-hidden="true" className="size-5 text-warm-500" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-paper py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <button
                  type="button"
                  className="block w-full px-3 py-1 text-left text-sm/6 text-charcoal data-focus:bg-paper-soft data-focus:outline-hidden"
                >
                  Copy URL
                </button>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-charcoal data-focus:bg-paper-soft data-focus:outline-hidden"
                >
                  Edit
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
