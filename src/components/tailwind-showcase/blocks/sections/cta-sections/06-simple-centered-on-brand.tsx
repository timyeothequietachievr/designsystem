// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-indigo-700">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-display font-semibold tracking-tight text-balance text-paper sm:text-5xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-indigo-200">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-paper px-3.5 py-2.5 text-sm font-semibold text-ember shadow-xs hover:bg-ember-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {' '}
              Get started{' '}
            </a>
            <a href="#" className="text-sm/6 font-semibold text-paper">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
