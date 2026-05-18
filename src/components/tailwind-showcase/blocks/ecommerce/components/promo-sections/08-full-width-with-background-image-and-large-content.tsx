// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="relative bg-ink">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="size-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-ink opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-paper lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-paper">
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they're still in stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-paper px-8 py-3 text-base font-medium text-charcoal hover:bg-paper-soft"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>
    </div>
  )
}
