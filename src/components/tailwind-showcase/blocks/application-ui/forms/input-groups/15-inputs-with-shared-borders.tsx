// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function TailwindBlock() {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm/6 font-medium text-charcoal">Card details</legend>
        <div className="mt-2 grid grid-cols-2">
          <div className="col-span-2">
            <input
              id="card-number"
              name="card-number"
              type="text"
              placeholder="Card number"
              aria-label="Card number"
              className="block w-full rounded-t-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <div className="-mt-px -mr-px">
            <input
              id="card-expiration-date"
              name="card-expiration-date"
              type="text"
              placeholder="MM / YY"
              aria-label="Expiration date"
              className="block w-full rounded-bl-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <div className="-mt-px">
            <input
              id="card-cvc"
              name="card-cvc"
              type="text"
              placeholder="CVC"
              aria-label="CVC"
              className="block w-full rounded-br-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <legend className="block text-sm/6 font-medium text-charcoal">Billing address</legend>
        <div className="mt-2">
          <div className="grid grid-cols-1 focus-within:relative">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              aria-label="Country"
              className="col-start-1 row-start-1 w-full appearance-none rounded-t-md bg-paper py-1.5 pr-8 pl-3 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
          <div className="-mt-px">
            <input
              id="postal-code"
              name="postal-code"
              type="text"
              placeholder="ZIP / Postal code"
              autoComplete="postal-code"
              aria-label="ZIP / Postal code"
              className="block w-full rounded-b-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}
