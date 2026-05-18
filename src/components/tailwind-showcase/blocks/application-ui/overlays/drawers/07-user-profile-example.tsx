// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

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
                <div className="relative flex h-full flex-col overflow-y-auto bg-paper shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 id="slide-over-heading" className="text-base font-semibold text-charcoal">
                        Profile
                      </h2>
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
                  {/* Main */}
                  <div>
                    <div className="pb-1 sm:pb-6">
                      <div>
                        <div className="relative h-40 sm:h-56">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                            className="absolute size-full object-cover"
                          />
                        </div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div className="sm:flex-1">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-charcoal sm:text-2xl">
                                  Ashley Porter
                                </h3>
                                <span className="ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400">
                                  <span className="sr-only">Online</span>
                                </span>
                              </div>
                              <p className="text-sm text-warm-500">@ashleyporter</p>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <button
                                type="button"
                                className="inline-flex w-full shrink-0 items-center justify-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember sm:flex-1"
                              >
                                Message
                              </button>
                              <button
                                type="button"
                                className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
                              >
                                Call
                              </button>
                              <div className="ml-3 inline-flex sm:ml-0">
                                <Menu as="div" className="relative inline-block text-left">
                                  <MenuButton className="relative inline-flex items-center rounded-md bg-paper p-2 text-warm-500 shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft">
                                    <span className="absolute -inset-1" />
                                    <span className="sr-only">Open options menu</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                  </MenuButton>
                                  <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                  >
                                    <div className="py-1">
                                      <MenuItem>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                                        >
                                          View profile
                                        </a>
                                      </MenuItem>
                                      <MenuItem>
                                        <a
                                          href="#"
                                          className="block px-4 py-2 text-sm text-warm-700 data-focus:bg-paper-soft data-focus:text-charcoal data-focus:outline-hidden"
                                        >
                                          Copy profile link
                                        </a>
                                      </MenuItem>
                                    </div>
                                  </MenuItems>
                                </Menu>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                      <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                        <div>
                          <dt className="text-sm font-medium text-warm-500 sm:w-40 sm:shrink-0">
                            Bio
                          </dt>
                          <dd className="mt-1 text-sm text-charcoal sm:col-span-2">
                            <p>
                              Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                              feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                              aenean arcu.
                            </p>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-warm-500 sm:w-40 sm:shrink-0">
                            Location
                          </dt>
                          <dd className="mt-1 text-sm text-charcoal sm:col-span-2">
                            New York, NY, USA
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-warm-500 sm:w-40 sm:shrink-0">
                            Website
                          </dt>
                          <dd className="mt-1 text-sm text-charcoal sm:col-span-2">ashleyporter.com</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-warm-500 sm:w-40 sm:shrink-0">
                            Birthday
                          </dt>
                          <dd className="mt-1 text-sm text-charcoal sm:col-span-2">
                            <time dateTime="1988-06-23">June 23, 1988</time>
                          </dd>
                        </div>
                      </dl>
                    </div>
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
