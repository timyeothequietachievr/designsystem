// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-paper px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-paper shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="/assets/logo-tqa.jpg"
          className="mx-auto h-12"
        />
        <img
          alt=""
          src="/assets/logo-tqa.jpg"
          className="mx-auto h-12 not-dark:hidden"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-charcoal sm:text-2xl/9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-charcoal">Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-charcoal">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-warm-500">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
