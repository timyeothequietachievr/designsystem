// @ts-nocheck
"use client";

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function TailwindBlock() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-paper px-6 py-5 shadow-xs focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:border-gray-400"
        >
          <div className="shrink-0">
            <img
              alt=""
              src={person.imageUrl}
              className="size-10 rounded-full bg-gray-300 outline -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-hidden">
              <span aria-hidden="true" className="absolute inset-0" />
              <p className="text-sm font-medium text-charcoal">{person.name}</p>
              <p className="truncate text-sm text-warm-500">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
