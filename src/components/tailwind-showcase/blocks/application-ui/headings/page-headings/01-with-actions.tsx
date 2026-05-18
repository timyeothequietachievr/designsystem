// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-charcoal sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
