// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-charcoal">Update your email</h3>
        <div className="mt-2 max-w-xl text-sm text-warm-500">
          <p>Change the email address you want associated with your account.</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              aria-label="Email"
              className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember sm:mt-0 sm:ml-3 sm:w-auto"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
