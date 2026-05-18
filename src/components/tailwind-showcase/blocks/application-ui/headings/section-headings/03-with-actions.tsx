// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-charcoal">Job Postings</h3>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          Share
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Create
        </button>
      </div>
    </div>
  )
}
