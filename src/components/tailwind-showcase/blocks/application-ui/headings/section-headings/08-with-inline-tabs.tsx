// @ts-nocheck
"use client";

const tabs = [
  { name: 'Open', href: '#', current: true },
  { name: 'Closed', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200">
      <div className="sm:flex sm:items-baseline">
        <h3 className="text-base font-semibold text-charcoal">Issues</h3>
        <div className="mt-4 sm:mt-0 sm:ml-10">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-ember'
                    : 'border-transparent text-warm-500 hover:border-gray-300 hover:text-warm-700',
                  'border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
