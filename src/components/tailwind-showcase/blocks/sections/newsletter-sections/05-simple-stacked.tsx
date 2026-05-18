// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-display font-semibold tracking-tight text-balance text-charcoal sm:text-4xl">
          Want product news and updates? Sign up for our newsletter.
        </h2>
        <form className="mt-10 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-charcoal">
            We care about your data. Read our{' '}
            <a
              href="#"
              className="font-semibold whitespace-nowrap text-ember hover:text-indigo-500"
            >
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
