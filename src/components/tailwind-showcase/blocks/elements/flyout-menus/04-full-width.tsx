// @ts-nocheck
"use client";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using",
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function TailwindBlock() {
  return (
    <Popover className="relative isolate z-50 shadow-sm">
      <div className="bg-paper py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-charcoal">
            Solutions
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 bg-paper transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-1/2 bg-paper shadow-lg ring-1 ring-charcoal/5"
        />
        <div className="relative bg-paper">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-lg p-6 text-sm/6 hover:bg-paper-soft"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-paper-soft group-hover:bg-paper">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-warm-500 group-hover:text-ember"
                  />
                </div>
                <a href={item.href} className="mt-6 block font-semibold text-charcoal">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-warm-500">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-paper-soft">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-3 divide-x divide-charcoal/10/5 border-x border-charcoal/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-charcoal hover:bg-paper-soft"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-warm-500" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
