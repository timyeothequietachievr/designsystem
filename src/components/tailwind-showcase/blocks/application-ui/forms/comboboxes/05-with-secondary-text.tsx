// @ts-nocheck
"use client";

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { name: 'Leslie Alexander', username: '@lesliealexander' },
  // More users...
]

export default function TailwindBlock() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-charcoal">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-paper py-1.5 pr-12 pl-3 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronDownIcon className="size-5 text-warm-500" aria-hidden="true" />
        </ComboboxButton>

        <ComboboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-paper py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {query.length > 0 && (
            <ComboboxOption
              value={{ id: null, name: query }}
              className="cursor-default px-3 py-2 text-charcoal select-none data-focus:bg-ember data-focus:text-paper data-focus:outline-hidden"
            >
              {query}
            </ComboboxOption>
          )}
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.username}
              value={person}
              className="cursor-default px-3 py-2 text-charcoal select-none data-focus:bg-ember data-focus:text-paper data-focus:outline-hidden"
            >
              <div className="flex">
                <span className="block truncate">{person.name}</span>
                <span className="ml-2 block truncate text-warm-500 in-data-focus:text-paper">
                  {person.username}
                </span>
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  )
}
