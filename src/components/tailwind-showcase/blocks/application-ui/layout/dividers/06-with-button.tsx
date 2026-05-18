// @ts-nocheck
"use client";

import { PlusIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          <PlusIcon aria-hidden="true" className="-mr-0.5 -ml-1 size-5 text-warm-500" />
          Button text
        </button>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
