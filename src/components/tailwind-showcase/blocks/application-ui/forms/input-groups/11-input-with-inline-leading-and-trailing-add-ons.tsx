// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-charcoal">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-paper px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 text-base text-warm-500 select-none sm:text-sm/6">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block min-w-0 grow bg-paper py-1.5 pr-3 pl-1 text-base text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
          />
          <div
            id="price-currency"
            className="shrink-0 text-base text-warm-500 select-none sm:text-sm/6"
          >
            USD
          </div>
        </div>
      </div>
    </div>
  )
}
