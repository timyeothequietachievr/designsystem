// @ts-nocheck
"use client";

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="border-b border-paper-200 px-4 py-5 sm:px-6">
      <div className="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-4 ml-4">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-12 rounded-full bg-paper-soft"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-charcoal">Tom Cook</h3>
              <p className="text-sm text-warm-500">
                <a href="#">@tom_cook</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 ml-4 flex shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
          >
            <PhoneIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-warm-500" />
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
          >
            <EnvelopeIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5 text-warm-500" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}
