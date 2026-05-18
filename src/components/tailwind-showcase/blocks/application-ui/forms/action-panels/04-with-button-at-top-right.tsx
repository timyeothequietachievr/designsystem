// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="bg-paper shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-charcoal">Manage subscription</h3>
            <div className="mt-2 max-w-xl text-sm text-warm-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
                repudiandae nam.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
