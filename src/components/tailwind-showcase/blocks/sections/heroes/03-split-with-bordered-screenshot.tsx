// @ts-nocheck
"use client";

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="relative isolate overflow-hidden bg-paper">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <img
            alt="Your Company"
            src="/assets/logo-tqa.jpg"
            className="h-11"
          />
          <img
            alt="Your Company"
            src="/assets/logo-tqa.jpg"
            className="h-11 not-dark:hidden"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-ember-100 px-3 py-1 text-sm/6 font-semibold text-ember ring-1 ring-indigo-600/20 ring-inset">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-warm-500">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-warm-500" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-7xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-warm-500 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-charcoal">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-ink/5 p-2 ring-1 ring-charcoal/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="/assets/logo-tqa.jpg"
                width={2432}
                height={1442}
                className="w-304 rounded-md bg-paper-soft shadow-xl ring-1 ring-charcoal/10"
              />
              <img
                alt="App screenshot"
                src="/assets/logo-tqa.jpg"
                width={2432}
                height={1442}
                className="w-304 rounded-md bg-paper/5 shadow-2xl ring-1 ring-white/10 not-dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
