// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        aria-label="Email"
        className="block w-full rounded-md bg-paper px-3 py-1.5 text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  )
}
