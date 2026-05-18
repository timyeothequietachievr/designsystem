// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper-soft sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-charcoal">Need more bandwidth?</h3>
        <div className="mt-2 max-w-xl text-sm text-warm-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-paper-soft"
          >
            Contact sales
          </button>
        </div>
      </div>
    </div>
  )
}
