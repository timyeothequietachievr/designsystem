// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block rounded-lg bg-paper px-1 text-xs font-medium text-charcoal"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  )
}
