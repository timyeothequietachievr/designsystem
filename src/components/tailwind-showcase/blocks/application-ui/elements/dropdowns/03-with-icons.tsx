// @ts-nocheck
"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft">
        Options
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-warm-500" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <ArchiveBoxIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <UserPlusIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <HeartIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
            >
              <TrashIcon
                aria-hidden="true"
                className="mr-3 size-5 text-warm-500 group-data-focus:text-warm-500"
              />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
