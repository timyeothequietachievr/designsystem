// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-display font-semibold tracking-tight text-balance text-charcoal sm:text-5xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-warm-500">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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
      </div>
    </div>
  )
}
