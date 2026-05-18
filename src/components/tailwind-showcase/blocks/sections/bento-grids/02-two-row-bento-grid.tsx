// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper-soft py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-ember">Deploy faster</h2>
        <p className="mt-2 max-w-lg text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-paper shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover object-left"
              />
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-warm-500">Releases</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-charcoal">Push to deploy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-warm-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                  egestas sem pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-paper shadow-sm outline outline-black/5 lg:rounded-tr-4xl">
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover"
              />
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-warm-500">Integrations</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-charcoal">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-warm-500">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-paper shadow-sm outline outline-black/5 lg:rounded-bl-4xl">
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover"
              />
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-warm-500">Security</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-charcoal">
                  Advanced access control
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-warm-500">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-paper shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl">
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover object-left"
              />
              <img
                alt=""
                src="/assets/logo-tqa.jpg"
                className="h-80 object-cover object-left not-dark:hidden"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-warm-500">Performance</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-charcoal">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-warm-500">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                  augue sed elit dictum vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
