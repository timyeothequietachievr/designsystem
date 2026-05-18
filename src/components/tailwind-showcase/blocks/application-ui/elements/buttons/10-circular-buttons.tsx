// @ts-nocheck
"use client";

import { PlusIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-ember p-1 text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-ember p-1.5 text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-ember p-2 text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
    </>
  )
}
