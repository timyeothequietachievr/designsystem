// @ts-nocheck
"use client";

import { Fragment } from 'react'

const locations = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  {
    name: 'London',
    people: [
      { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
      { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
      { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
      { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
    ],
  },
  {
    name: 'Leeds',
    people: [
      { name: 'Emily Selman', title: 'VP, User Experience', email: 'emily.selman@example.com', role: 'Member' },
      { name: 'Kristin Watson', title: 'VP, Human Resources', email: 'kristin.watson@example.com', role: 'Admin' },
      { name: 'Emma Dorsey', title: 'Senior Developer', email: 'emma.dorsey@example.com', role: 'Member' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
            <table className="relative min-w-full">
              <thead className="bg-paper">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-charcoal sm:pl-3"
                  >
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal">
                    Role
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-paper">
                {locations.map((location) => (
                  <Fragment key={location.name}>
                    <tr className="border-t border-paper-200">
                      <th
                        scope="colgroup"
                        colSpan={5}
                        className="bg-paper-soft py-2 pr-3 pl-4 text-left text-sm font-semibold text-charcoal sm:pl-3"
                      >
                        {location.name}
                      </th>
                    </tr>
                    {location.people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={classNames(
                          personIdx === 0
                            ? 'border-gray-300'
                            : 'border-paper-200',
                          'border-t',
                        )}
                      >
                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-charcoal sm:pl-3">
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
                        <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">
                          <a
                            href="#"
                            className="text-ember hover:text-indigo-900"
                          >
                            Edit<span className="sr-only">, {person.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
