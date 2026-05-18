// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-charcoal">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-paper pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <div className="shrink-0 text-base text-warm-500 select-none sm:text-sm/6">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-warm-500 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-warm-500 sm:size-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
