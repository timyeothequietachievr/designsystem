// @ts-nocheck
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-paper px-2 py-2 text-warm-500 inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-paper px-2 py-2 text-warm-500 inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </button>
    </span>
  )
}
