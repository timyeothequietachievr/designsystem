// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function TailwindBlock() {
  const [open, setOpen] = useState(true)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-charcoal hover:bg-gray-950/10"
      >
        Open drawer
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="relative flex h-full flex-col divide-y divide-gray-200 bg-paper shadow-xl">
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-base font-semibold text-charcoal">
                          Panel title
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md text-warm-500 hover:text-warm-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                  </div>
                  <div className="flex shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:inset-ring-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
