// @ts-nocheck
"use client";

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0 pt-0.5">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      className="size-10 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-charcoal">Emilia Gates</p>
                    <p className="mt-1 text-sm text-warm-500">Sent you an invite to connect.</p>
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-ember px-2.5 py-1.5 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md bg-paper px-2.5 py-1.5 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="inline-flex rounded-md text-warm-500 hover:text-warm-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
