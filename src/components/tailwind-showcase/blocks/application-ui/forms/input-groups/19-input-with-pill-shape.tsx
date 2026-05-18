// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm/6 font-medium text-charcoal">
        Name
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full rounded-full bg-paper px-4 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
