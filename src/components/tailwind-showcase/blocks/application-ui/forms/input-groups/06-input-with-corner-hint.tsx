// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="email" className="block text-sm/6 font-medium text-charcoal">
          Email
        </label>
        <span id="email-optional" className="text-sm/6 text-warm-500">
          Optional
        </span>
      </div>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="email-optional"
          className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
