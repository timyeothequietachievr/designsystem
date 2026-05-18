// @ts-nocheck
"use client";

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function TailwindBlock() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-warm-500 hover:text-warm-700"
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-warm-500" />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-warm-500 hover:text-warm-700"
                >
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-2 text-2xl/7 font-bold text-charcoal sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-warm-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-warm-500" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-warm-500">
            <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-warm-500" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-warm-500">
            <CurrencyDollarIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-warm-500"
            />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-warm-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-warm-500" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
          >
            <PencilIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-warm-500" />
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
          >
            <LinkIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-warm-500" />
            View
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 size-5 text-warm-500" />
          </MenuButton>

          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 -mr-1 w-24 origin-top-right rounded-md bg-paper py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:outline-hidden"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
