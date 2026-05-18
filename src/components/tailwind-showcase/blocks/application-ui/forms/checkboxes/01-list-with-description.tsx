// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <fieldset>
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <div className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                defaultChecked
                id="comments"
                name="comments"
                type="checkbox"
                aria-describedby="comments-description"
                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-checked:opacity-100"
                />
                <path
                  d="M3 7H11"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-indeterminate:opacity-100"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm/6">
            <label htmlFor="comments" className="font-medium text-charcoal">
              Comments
            </label>
            <p id="comments-description" className="text-warm-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                aria-describedby="candidates-description"
                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-checked:opacity-100"
                />
                <path
                  d="M3 7H11"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-indeterminate:opacity-100"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm/6">
            <label htmlFor="candidates" className="font-medium text-charcoal">
              Candidates
            </label>
            <p id="candidates-description" className="text-warm-500">
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-checked:opacity-100"
                />
                <path
                  d="M3 7H11"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-indeterminate:opacity-100"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm/6">
            <label htmlFor="offers" className="font-medium text-charcoal">
              Offers
            </label>
            <p id="offers-description" className="text-warm-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
