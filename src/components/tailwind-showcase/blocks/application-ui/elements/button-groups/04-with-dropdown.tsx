// @ts-nocheck
"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const items = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]

export default function TailwindBlock() {
  return (
    <div className="inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        Save changes
      </button>
      <Menu as="div" className="relative -ml-px block">
        <MenuButton className="relative inline-flex items-center rounded-r-md bg-paper px-2 py-2 text-warm-500 inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon aria-hidden="true" className="size-5" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {items.map((item) => (
              <MenuItem key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                >
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
