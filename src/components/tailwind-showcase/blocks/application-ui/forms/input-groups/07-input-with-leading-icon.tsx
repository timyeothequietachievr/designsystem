// @ts-nocheck
"use client";

import { EnvelopeIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-charcoal">
        Email
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="col-start-1 row-start-1 block w-full rounded-md bg-paper py-1.5 pr-3 pl-10 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
        />
        <EnvelopeIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-warm-500 sm:size-4"
        />
      </div>
    </div>
  )
}
