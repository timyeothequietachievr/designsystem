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
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="email-description"
          className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      <p id="email-description" className="mt-2 text-sm text-warm-500">
        We'll only use this for spam.
      </p>
    </div>
  )
}
