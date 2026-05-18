// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="search" className="block text-sm/6 font-medium text-charcoal">
        Quick search
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-paper outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id="search"
            name="search"
            type="text"
            className="block min-w-0 grow px-3 py-1.5 text-base text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
          />
          <div className="flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded-sm border border-paper-200 px-1 font-sans text-xs text-warm-500">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}
