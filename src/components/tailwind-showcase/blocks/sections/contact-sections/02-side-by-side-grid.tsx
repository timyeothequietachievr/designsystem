// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal">
                Get in touch
              </h2>
              <p className="mt-4 text-base/7 text-warm-500">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-warm-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-ember"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Press</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-warm-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:press@example.com" className="font-semibold text-ember">
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Join our team</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-warm-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@example.com"
                        className="font-semibold text-ember"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-warm-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:hello@example.com" className="font-semibold text-ember">
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal">
                Locations
              </h2>
              <p className="mt-4 text-base/7 text-warm-500">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Los Angeles</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-warm-500 not-italic">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">New York</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-warm-500 not-italic">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Toronto</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-warm-500 not-italic">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="rounded-2xl bg-paper-soft p-10">
                <h3 className="text-base/7 font-semibold text-charcoal">Chicago</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-warm-500 not-italic">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
