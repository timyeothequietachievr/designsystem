// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
            We approach work as a place to make the world better
          </h2>
          <p className="mt-6 text-base/7 text-warm-500">
            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
            purus nibh cursus sit eu in id. Integer vel nibh.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-paper-soft p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-charcoal">250k</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-display font-semibold tracking-tight text-charcoal">
                Users on the platform
              </p>
              <p className="mt-2 text-base/7 text-warm-500">
                Vel labore deleniti veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-ink p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-paper">$8.9 billion</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-display font-semibold tracking-tight text-paper">
                We’re proud that our customers have made over $8 billion in total revenue.
              </p>
              <p className="mt-2 text-base/7 text-warm-500">
                Eu duis porta aliquam ornare. Elementum eget magna egestas.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-ember p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-paper">401,093</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-display font-semibold tracking-tight text-paper">Transactions this year</p>
              <p className="mt-2 text-base/7 text-indigo-200">
                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
