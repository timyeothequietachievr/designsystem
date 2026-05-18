// @ts-nocheck
"use client";

import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="query" className="block text-sm/6 font-medium text-charcoal">
        Search candidates
      </label>
      <div className="mt-2 flex">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="John Smith"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-paper py-1.5 pr-3 pl-10 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <UsersIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-warm-500 sm:size-4"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal outline-1 -outline-offset-1 outline-gray-300 hover:bg-paper-soft focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 size-4 text-warm-500" />
          Sort
        </button>
      </div>
    </div>
  )
}
