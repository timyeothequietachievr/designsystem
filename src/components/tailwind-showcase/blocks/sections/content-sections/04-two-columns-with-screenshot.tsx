// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base/7 font-semibold text-ember">Deploy faster</p>
          <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
            A better workflow
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-warm-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-charcoal/10"
          />
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-charcoal/10 not-dark:hidden"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
