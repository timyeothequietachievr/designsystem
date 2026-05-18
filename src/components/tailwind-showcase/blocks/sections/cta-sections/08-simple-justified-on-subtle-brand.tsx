// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-display font-semibold tracking-tight text-charcoal sm:text-5xl">
          Ready to dive in?
          <br />
          Start your free trial today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {' '}
            Get started{' '}
          </a>
          <a href="#" className="text-sm/6 font-semibold text-charcoal">
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
