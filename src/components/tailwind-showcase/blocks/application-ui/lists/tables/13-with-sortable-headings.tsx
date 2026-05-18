// @ts-nocheck
"use client";

import { ChevronDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
]

export default function TailwindBlock() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-charcoal">Users</h1>
          <p className="mt-2 text-sm text-warm-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-ember px-3 py-2 text-center text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-charcoal sm:pl-0"
                  >
                    <a href="#" className="group inline-flex">
                      Name
                      <span className="invisible ml-2 flex-none rounded-sm text-warm-500 group-hover:visible group-focus:visible">
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    <a href="#" className="group inline-flex">
                      Title
                      <span className="ml-2 flex-none rounded-sm bg-paper-soft text-charcoal group-hover:bg-gray-200">
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    <a href="#" className="group inline-flex">
                      Email
                      <span className="invisible ml-2 flex-none rounded-sm text-warm-500 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="invisible ml-2 size-5 flex-none rounded-sm text-warm-500 group-hover:visible group-focus:visible"
                        />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    <a href="#" className="group inline-flex">
                      Role
                      <span className="invisible ml-2 flex-none rounded-sm text-warm-500 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="invisible ml-2 size-5 flex-none rounded-sm text-warm-500 group-hover:visible group-focus:visible"
                        />
                      </span>
                    </a>
                  </th>
                  <th scope="col" className="py-3.5 pr-0 pl-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-paper">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-charcoal sm:pl-0">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-warm-500">
                      {person.title}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-warm-500">
                      {person.email}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-warm-500">
                      {person.role}
                    </td>
                    <td className="py-4 pr-4 pl-3 text-right text-sm whitespace-nowrap sm:pr-0">
                      <a
                        href="#"
                        className="text-ember hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
