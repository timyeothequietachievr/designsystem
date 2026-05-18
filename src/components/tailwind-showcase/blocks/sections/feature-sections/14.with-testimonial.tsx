// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-ember">Deploy faster</h2>
              <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-warm-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  Get started
                </a>
              </div>
              <figure className="mt-16 border-l border-paper-200 pl-8 text-warm-700">
                <blockquote className="text-base/7">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                    tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    className="size-6 flex-none rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-charcoal">Maria Hill</span> –{' '}
                    <span className="text-warm-500">Marketing Manager</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/assets/logo-tqa.jpg"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
          />
        </div>
      </div>
    </div>
  )
}
