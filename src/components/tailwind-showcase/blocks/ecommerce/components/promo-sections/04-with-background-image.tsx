// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              alt=""
              src="/assets/logo-tqa.jpg"
              className="size-full object-cover"
            />
          </div>
          <div className="relative bg-ink/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                <span className="block sm:inline">Level up</span>
                <span className="block sm:inline">your desk</span>
              </h2>
              <p className="mt-3 text-xl text-paper">
                Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
                life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
                desk setup.
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-paper px-8 py-3 text-base font-medium text-charcoal hover:bg-paper-soft sm:w-auto"
              >
                Shop Workspace
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
