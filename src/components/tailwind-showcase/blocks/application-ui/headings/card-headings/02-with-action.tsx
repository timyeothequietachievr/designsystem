// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200 px-4 py-5 sm:px-6">
      <div className="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-2 ml-4">
          <h3 className="text-base font-semibold text-charcoal">Job Postings</h3>
        </div>
        <div className="mt-2 ml-4 shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
