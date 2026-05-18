// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="relative bg-paper">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-64 w-full bg-paper-soft object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
              Let's work together
            </h2>
            <p className="mt-2 text-lg/8 text-warm-500">
              Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form action="#" method="POST" className="mt-16">
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
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
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
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-charcoal">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-charcoal">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-charcoal">
                      Phone
                    </label>
                    <p id="phone-description" className="text-warm-500">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-charcoal">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-warm-500">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md bg-paper px-3.5 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm/6 font-semibold text-charcoal">
                    Expected budget
                  </legend>
                  <div className="mt-4 space-y-4 text-sm/6 text-warm-500">
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="under_25k"
                        defaultChecked
                        id="budget-under-25k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-under-25k">Less than $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="25k-50k"
                        id="budget-25k-50k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="50k-100k"
                        id="budget-50k-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="over_100k"
                        id="budget-over-100k"
                        name="budget"
                        type="radio"
                        className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label htmlFor="budget-over-100k">$100K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-charcoal/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-ember px-3.5 py-2.5 text-center text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
