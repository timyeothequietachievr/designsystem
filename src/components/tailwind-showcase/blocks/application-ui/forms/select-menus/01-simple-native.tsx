// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <>
      <label htmlFor="location" className="block text-sm/6 font-medium text-charcoal">
        Location
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          id="location"
          name="location"
          defaultValue="Canada"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-paper py-1.5 pr-8 pl-3 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ember sm:text-sm/6"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-warm-500 sm:size-4"
        />
      </div>
    </>
  )
}
