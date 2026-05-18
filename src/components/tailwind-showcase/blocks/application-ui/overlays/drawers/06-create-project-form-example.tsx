// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

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
                <form className="relative flex h-full flex-col divide-y divide-gray-200 bg-paper shadow-xl">
                  <div className="h-0 flex-1 overflow-y-auto">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <DialogTitle className="text-base font-semibold text-paper">New project</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md text-indigo-200 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">
                          Get started by filling in the information below to create your new project.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <div>
                            <label
                              htmlFor="project-name"
                              className="block text-sm/6 font-medium text-charcoal"
                            >
                              Project name
                            </label>
                            <div className="mt-2">
                              <input
                                id="project-name"
                                name="project-name"
                                type="text"
                                className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ember sm:text-sm/6"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="project-description"
                              className="block text-sm/6 font-medium text-charcoal"
                            >
                              Description
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="project-description"
                                name="project-description"
                                rows={3}
                                className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ember sm:text-sm/6"
                                defaultValue={''}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm/6 font-medium text-charcoal">Team Members</h3>
                            <div className="mt-2">
                              <div className="flex space-x-2">
                                {team.map((person) => (
                                  <a
                                    key={person.email}
                                    href={person.href}
                                    className="relative rounded-full hover:opacity-75"
                                  >
                                    <img
                                      alt={person.name}
                                      src={person.imageUrl}
                                      className="inline-block size-8 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
                                    />
                                  </a>
                                ))}
                                <button
                                  type="button"
                                  className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-paper-200 bg-paper text-warm-500 hover:border-gray-300 hover:text-warm-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                                >
                                  <span className="absolute -inset-2" />
                                  <span className="sr-only">Add team member</span>
                                  <PlusIcon aria-hidden="true" className="size-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <fieldset>
                            <legend className="text-sm/6 font-medium text-charcoal">Privacy</legend>
                            <div className="mt-2 space-y-4">
                              <div className="relative flex items-start">
                                <div className="absolute flex h-6 items-center">
                                  <input
                                    defaultValue="public"
                                    defaultChecked
                                    id="privacy-public"
                                    name="privacy"
                                    type="radio"
                                    aria-describedby="privacy-public-description"
                                    className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                  />
                                </div>
                                <div className="pl-7 text-sm/6">
                                  <label
                                    htmlFor="privacy-public"
                                    className="font-medium text-charcoal"
                                  >
                                    Public access
                                  </label>
                                  <p id="privacy-public-description" className="text-warm-500">
                                    Everyone with the link will see this project.
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-6 items-center">
                                    <input
                                      defaultValue="private-to-project"
                                      id="privacy-private-to-project"
                                      name="privacy"
                                      type="radio"
                                      aria-describedby="privacy-private-to-project-description"
                                      className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                    />
                                  </div>
                                  <div className="pl-7 text-sm/6">
                                    <label
                                      htmlFor="privacy-private-to-project"
                                      className="font-medium text-charcoal"
                                    >
                                      Private to project members
                                    </label>
                                    <p
                                      id="privacy-private-to-project-description"
                                      className="text-warm-500"
                                    >
                                      Only members of this project would be able to access.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-6 items-center">
                                    <input
                                      defaultValue="private"
                                      id="privacy-private"
                                      name="privacy"
                                      type="radio"
                                      aria-describedby="privacy-private-to-project-description"
                                      className="relative size-4 appearance-none rounded-full border border-gray-300 before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                    />
                                  </div>
                                  <div className="pl-7 text-sm/6">
                                    <label
                                      htmlFor="privacy-private"
                                      className="font-medium text-charcoal"
                                    >
                                      Private to you
                                    </label>
                                    <p id="privacy-private-description" className="text-warm-500">
                                      You are the only one able to access this project.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="pt-4 pb-6">
                          <div className="flex text-sm">
                            <a
                              href="#"
                              className="group inline-flex items-center font-medium text-ember hover:text-indigo-900"
                            >
                              <LinkIcon
                                aria-hidden="true"
                                className="size-5 text-indigo-500 group-hover:text-indigo-900"
                              />
                              <span className="ml-2">Copy link</span>
                            </a>
                          </div>
                          <div className="mt-4 flex text-sm">
                            <a
                              href="#"
                              className="group inline-flex items-center text-warm-500 hover:text-charcoal"
                            >
                              <QuestionMarkCircleIcon
                                aria-hidden="true"
                                className="size-5 text-warm-500 group-hover:text-warm-500"
                              />
                              <span className="ml-2">Learn more about sharing</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
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
                </form>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
