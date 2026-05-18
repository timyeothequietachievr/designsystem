// @ts-nocheck
"use client";

const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default function TailwindBlock() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={`${plan.id}-description`}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-paper before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label htmlFor={plan.id} className="font-medium text-charcoal">
                {plan.name}
              </label>
              <p id={`${plan.id}-description`} className="text-warm-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
