// @ts-nocheck
"use client";

import { BookmarkIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal ring-1 ring-gray-300 ring-inset hover:bg-paper-soft focus:z-10"
      >
        <BookmarkIcon aria-hidden="true" className="-ml-0.5 size-5 text-warm-500" />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal ring-1 ring-gray-300 ring-inset hover:bg-paper-soft focus:z-10"
      >
        12k
      </button>
    </span>
  )
}
