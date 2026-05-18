// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:hidden">
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            defaultValue={tabs.find((tab) => tab.current).name}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-paper py-2 pr-8 pl-3 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
          />
        </div>
        <div className="hidden sm:block">
          <nav className="flex border-b border-paper-200 py-4">
            <ul
              role="list"
              className="flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-warm-500"
            >
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <a
                    href={tab.href}
                    className={
                      tab.current ? 'text-ember' : 'hover:text-warm-700'
                    }
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
