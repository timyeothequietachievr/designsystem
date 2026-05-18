// @ts-nocheck
"use client";

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-ember-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
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
                  Supercharge your web app
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-warm-500 sm:text-xl/8">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  >
                    Documentation
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-charcoal">
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-paper shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-ember [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-ink">
                      <div className="flex bg-ink/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-warm-500">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-paper/5 px-4 py-2 text-paper">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
