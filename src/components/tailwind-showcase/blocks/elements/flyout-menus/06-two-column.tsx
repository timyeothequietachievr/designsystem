// @ts-nocheck
"use client";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools and find out expectations',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  {
    name: 'Reports',
    description: 'Edit, manage and create newly informed decisions',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]

export default function TailwindBlock() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-charcoal">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-paper text-sm/6 shadow-lg outline-1 outline-gray-900/5 lg:max-w-3xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-paper-soft"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-paper-soft group-hover:bg-paper">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-warm-500 group-hover:text-ember"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-charcoal">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-warm-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-paper-soft px-8 py-6">
            <div className="flex items-center gap-x-3">
              <h3 className="text-sm/6 font-semibold text-charcoal">Enterprise</h3>
              <p className="rounded-full bg-ember/10 px-2.5 py-1.5 text-xs font-semibold text-ember">
                New
              </p>
            </div>
            <p className="mt-2 text-sm/6 text-warm-500">
              Empower your entire team with even more advanced tools.
            </p>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
