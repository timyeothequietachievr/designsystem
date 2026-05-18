// @ts-nocheck
"use client";

import { useLayoutEffect, useRef, useState } from 'react'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

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
            className="block rounded-md bg-ember px-3 py-1.5 text-center text-sm/6 font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="group/table relative">
              <div className="absolute top-0 left-14 z-10 hidden h-12 items-center space-x-3 bg-paper group-has-checked/table:flex sm:left-12">
                <button
                  type="button"
                  className="inline-flex items-center rounded-sm bg-paper px-2 py-1 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-paper"
                >
                  Bulk edit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-sm bg-paper px-2 py-1 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-paper"
                >
                  Delete all
                </button>
              </div>
              <table className="relative min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <div className="group absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1">
                        <input
                          type="checkbox"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                        <svg
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            className="opacity-0 group-has-checked:opacity-100"
                            d="M3 8L6 11L11 3.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="opacity-0 group-has-indeterminate:opacity-100"
                            d="M3 7H11"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="min-w-48 py-3.5 pr-3 text-left text-sm font-semibold text-charcoal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-charcoal"
                    >
                      Role
                    </th>
                    <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-paper">
                  {people.map((person) => (
                    <tr key={person.email} className="group has-checked:bg-paper-soft">
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <div className="absolute inset-y-0 left-0 hidden w-0.5 bg-ember group-has-checked:block" />

                        <div className="absolute top-1/2 left-4 -mt-2 grid size-4 grid-cols-1">
                          <input
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person),
                              )
                            }
                          />
                          <svg
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              className="opacity-0 group-has-checked:opacity-100"
                              d="M3 8L6 11L11 3.5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              className="opacity-0 group-has-indeterminate:opacity-100"
                              d="M3 7H11"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                      <td className="py-4 pr-3 text-sm font-medium whitespace-nowrap text-charcoal group-has-checked:text-ember">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
