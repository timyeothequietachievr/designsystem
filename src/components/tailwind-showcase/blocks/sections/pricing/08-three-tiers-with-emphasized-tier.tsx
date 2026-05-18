// @ts-nocheck
"use client";

import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$19', annually: '$199' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    featured: false,
    cta: 'Buy plan',
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$29', annually: '$299' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    featured: false,
    cta: 'Buy plan',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    featured: true,
    cta: 'Contact sales',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  return (
    <form className="group/tiers bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-ember">Pricing</h2>
          <p className="mt-2 text-5xl font-display font-semibold tracking-tight text-balance text-charcoal sm:text-6xl">
            Pricing that grows with you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-warm-500 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold inset-ring inset-ring-paper-200">
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-ember">
                <input
                  defaultValue="monthly"
                  defaultChecked
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-warm-500 group-has-checked:text-paper">Monthly</span>
              </label>
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-ember">
                <input
                  defaultValue="annually"
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-warm-500 group-has-checked:text-paper">Annually</span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              data-featured={tier.featured ? 'true' : undefined}
              className="group/tier rounded-3xl p-8 ring-1 ring-paper-200 data-featured:bg-ink data-featured:ring-charcoal xl:p-10"
            >
              <h3
                id={`tier-${tier.id}`}
                className="text-lg/8 font-semibold text-charcoal group-data-featured/tier:text-paper"
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm/6 text-warm-500 group-data-featured/tier:text-gray-300">
                {tier.description}
              </p>
              {typeof tier.price === 'string' ? (
                <p className="mt-6 text-4xl font-display font-semibold tracking-tight text-charcoal group-data-featured/tier:text-paper">
                  {tier.price}
                </p>
              ) : (
                <>
                  <p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden">
                    <span className="text-4xl font-display font-semibold tracking-tight text-charcoal group-data-featured/tier:text-paper">
                      {tier.price.monthly}
                    </span>
                    <span className="text-sm/6 font-semibold text-warm-500 group-data-featured/tier:text-gray-300">
                      /month
                    </span>
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden">
                    <span className="text-4xl font-display font-semibold tracking-tight text-charcoal group-data-featured/tier:text-paper">
                      {tier.price.annually}
                    </span>
                    <span className="text-sm/6 font-semibold text-warm-500 group-data-featured/tier:text-gray-300">
                      /year
                    </span>
                  </p>
                </>
              )}

              <button
                value={tier.id}
                name="tier"
                type="submit"
                aria-describedby={`tier-${tier.id}`}
                className="mt-6 block w-full rounded-md bg-ember px-3 py-2 text-center text-sm/6 font-semibold text-paper shadow-xs group-data-featured/tier:bg-paper/10 group-data-featured/tier:inset-ring group-data-featured/tier:inset-ring-white/5 hover:bg-ember group-data-featured/tier:hover:bg-paper/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember group-data-featured/tier:focus-visible:outline-white/75"
              >
                {tier.cta}
              </button>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-warm-500 group-data-featured/tier:text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? 'text-paper' : 'text-ember',
                        'h-6 w-5 flex-none',
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}
