// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto max-w-xl rounded-xl bg-paper p-6 shadow-lg outline-1 outline-gray-900/10">
        <p className="text-sm/6 text-charcoal">
          This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
          consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are
          delicious. See our{' '}
          <a
            href="#"
            className="font-semibold text-ember hover:text-indigo-500"
          >
            cookie policy
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-md bg-ink px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button
            type="button"
            className="text-sm/6 font-semibold text-charcoal hover:text-warm-700"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  )
}
