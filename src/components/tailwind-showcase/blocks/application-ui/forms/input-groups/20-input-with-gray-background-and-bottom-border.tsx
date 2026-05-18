// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="name" className="block text-sm/6 font-medium text-charcoal">
        Name
      </label>
      <div className="relative mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="peer block w-full bg-paper-soft px-3 py-1.5 text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
        />
      </div>
    </div>
  )
}
