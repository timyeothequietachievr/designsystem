// @ts-nocheck
"use client";

import { PlusIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="relative flex items-center justify-between">
      <span className="bg-paper pr-3 text-base font-semibold text-charcoal">
        Projects
      </span>
      <div className="flex w-full items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-300" />
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          <PlusIcon aria-hidden="true" className="-mr-0.5 -ml-1 size-5 text-warm-500" />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
