// @ts-nocheck
"use client";

const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-ink/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-paper px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm/6 font-medium text-warm-500">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-display font-semibold tracking-tight text-charcoal">
                  {stat.value}
                </span>
                {stat.unit ? <span className="text-sm text-warm-500">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
