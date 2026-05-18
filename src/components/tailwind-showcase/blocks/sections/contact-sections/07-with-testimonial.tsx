// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="relative isolate bg-paper px-6 py-24 sm:py-32 lg:px-8">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
          Let’s talk about your project
        </h2>
        <p className="mt-2 text-lg/8 text-warm-500">
          We help companies and individuals build out their brand guidelines.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-charcoal">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-charcoal">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm/6 font-semibold text-charcoal">
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="website" className="block text-sm/6 font-semibold text-charcoal">
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-charcoal">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-ember px-3.5 py-2.5 text-center text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-warm-500">
              By submitting this form, I agree to the{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-ember">
                privacy policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="h-12 w-auto"
            />
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="h-12 w-auto not-dark:hidden"
            />
            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-charcoal">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  className="size-12 flex-none rounded-full bg-paper-soft"
                />
                <div>
                  <div className="text-base font-semibold text-charcoal">Brenna Goyette</div>
                  <div className="text-sm/6 text-warm-500">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
