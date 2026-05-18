// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-charcoal">
        Email
      </label>
      <div className="mt-2">
        <input
          defaultValue="you@example.com"
          id="email"
          name="email"
          type="email"
          disabled
          placeholder="you@example.com"
          className="block w-full rounded-md bg-paper px-3 py-1.5 text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-paper-soft disabled:text-warm-500 disabled:outline-gray-200 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
