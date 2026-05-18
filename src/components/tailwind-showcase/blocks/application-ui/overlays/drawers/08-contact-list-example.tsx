// @ts-nocheck
"use client";

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Online', href: '#', current: false },
  { name: 'Offline', href: '#', current: false },
]
const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Michael Foster',
    handle: 'michaelfoster',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Dries Vincent',
    handle: 'driesvincent',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Courtney Henry',
    handle: 'courtneyhenry',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Tom Cook',
    handle: 'tomcook',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Whitney Francis',
    handle: 'whitneyfrancis',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Emma Dorsey',
    handle: 'emmadorsey',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Alicia Bell',
    handle: 'aliciabell',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Jenny Wilson',
    handle: 'jennywilson',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Anna Roberts',
    handle: 'annaroberts',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Benjamin Russel',
    handle: 'benjaminrussel',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  {
    name: 'Jeffrey Webb',
    handle: 'jeffreywebb',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
  {
    name: 'Kathryn Murphy',
    handle: 'kathrynmurphy',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-charcoal">Team</DialogTitle>
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
                  <div className="border-b border-paper-200">
                    <div className="px-6">
                      <nav className="-mb-px flex space-x-6">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? 'border-indigo-500 text-ember'
                                : 'border-transparent text-warm-500 hover:border-gray-300 hover:text-warm-700',
                              'border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap',
                            )}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                    {team.map((person) => (
                      <li key={person.handle}>
                        <div className="group relative flex items-center px-5 py-6">
                          <a href={person.href} className="-m-1 block flex-1 p-1">
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 group-hover:bg-paper-soft"
                            />
                            <div className="relative flex min-w-0 flex-1 items-center">
                              <span className="relative inline-block shrink-0">
                                <img
                                  alt=""
                                  src={person.imageUrl}
                                  className="size-10 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
                                />
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    person.status === 'online' ? 'bg-green-400' : 'bg-gray-300',
                                    'absolute top-0 right-0 block size-2.5 rounded-full ring-2 ring-white',
                                  )}
                                />
                              </span>
                              <div className="ml-4 truncate">
                                <p className="truncate text-sm font-medium text-charcoal">
                                  {person.name}
                                </p>
                                <p className="truncate text-sm text-warm-500">
                                  {'@' + person.handle}
                                </p>
                              </div>
                            </div>
                          </a>
                          <Menu as="div" className="relative ml-2 inline-block shrink-0 text-left">
                            <MenuButton className="group relative inline-flex size-8 items-center justify-center rounded-full bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open options menu</span>
                              <span className="flex size-full items-center justify-center rounded-full">
                                <EllipsisVerticalIcon
                                  aria-hidden="true"
                                  className="size-5 text-warm-500 group-hover:text-warm-500"
                                />
                              </span>
                            </MenuButton>
                            <MenuItems
                              transition
                              className="absolute top-0 right-full z-10 mr-1 w-48 origin-top-right rounded-md bg-paper shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
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
                                    Send message
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </Menu>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
