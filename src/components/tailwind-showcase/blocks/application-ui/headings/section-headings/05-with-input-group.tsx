// @ts-nocheck
"use client";

import { BarsArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-charcoal">Job Postings</h3>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="Search candidates"
            aria-label="Search candidates"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-paper py-1.5 pr-3 pl-10 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
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
