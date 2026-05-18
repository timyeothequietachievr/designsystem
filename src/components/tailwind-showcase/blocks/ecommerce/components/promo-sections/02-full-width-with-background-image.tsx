// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="relative bg-ink px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          src="/assets/logo-tqa.jpg"
          className="size-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">Long-term thinking</h2>
        <p className="mt-3 text-xl text-paper">
          We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to
          focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the
          universe.
        </p>
        <a
          href="#"
          className="mt-8 block w-full rounded-md border border-transparent bg-paper px-8 py-3 text-base font-medium text-charcoal hover:bg-paper-soft sm:w-auto"
        >
          Read our story
        </a>
      </div>
    </div>
  )
}
