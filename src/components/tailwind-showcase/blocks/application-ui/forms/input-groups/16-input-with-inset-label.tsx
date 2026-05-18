// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="rounded-md bg-paper px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-charcoal">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
      />
    </div>
  )
}
