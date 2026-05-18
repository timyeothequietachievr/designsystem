// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <span className="isolate inline-flex rounded-md shadow-xs">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        Years
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-paper px-3 py-2 text-sm font-semibold text-charcoal inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        Months
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal inset-ring-1 inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
      >
        Days
      </button>
    </span>
  )
}
