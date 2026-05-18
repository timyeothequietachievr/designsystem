// @ts-nocheck
"use client";

import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-ember px-2.5 py-1.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-ember px-3.5 py-2.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 size-5" />
      </button>
    </>
  )
}
