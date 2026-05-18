// @ts-nocheck
"use client";

import { PlusSmallIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base/7 font-semibold text-charcoal">Cashflow</h1>
        <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-0 sm:w-auto sm:border-l sm:border-paper-200 sm:pl-6 sm:text-sm/7">
          <a href="#" className="text-ember">
            Last 7 days
          </a>
          <a href="#" className="text-warm-700">
            Last 30 days
          </a>
          <a href="#" className="text-warm-700">
            All-time
          </a>
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
          New invoice
        </a>
      </div>
    </div>
  )
}
