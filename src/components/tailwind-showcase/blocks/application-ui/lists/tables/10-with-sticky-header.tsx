// @ts-nocheck
"use client";

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
  { name: 'Emily Selman', title: 'VP, User Experience', email: 'emily.selman@example.com', role: 'Member' },
  { name: 'Kristin Watson', title: 'VP, Human Resources', email: 'kristin.watson@example.com', role: 'Admin' },
  { name: 'Emma Dorsey', title: 'Senior Developer', email: 'emma.dorsey@example.com', role: 'Member' },
  { name: 'Alicia Bell', title: 'Junior Copywriter', email: 'alicia.bell@example.com', role: 'Admin' },
  { name: 'Jenny Wilson', title: 'Studio Artist', email: 'jenny.wilson@example.com', role: 'Owner' },
  { name: 'Anna Roberts', title: 'Partner, Creative', email: 'anna.roberts@example.com', role: 'Member' },
  {
    name: 'Benjamin Russel',
    title: 'Director, Print Operations',
    email: 'benjamin.russel@example.com',
    role: 'Member',
  },
  { name: 'Jeffrey Webb', title: 'Senior Art Director', email: 'jeffrey.webb@example.com', role: 'Admin' },
  { name: 'Kathryn Murphy', title: 'Associate Creative Director', email: 'kathryn.murphy@example.com', role: 'Member' },
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
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-paper/75 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-charcoal backdrop-blur-sm backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-paper/75 px-3 py-3.5 text-left text-sm font-semibold text-charcoal backdrop-blur-sm backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-paper/75 px-3 py-3.5 text-left text-sm font-semibold text-charcoal backdrop-blur-sm backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-paper/75 px-3 py-3.5 text-left text-sm font-semibold text-charcoal backdrop-blur-sm backdrop-filter"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-paper/75 py-3.5 pr-4 pl-3 backdrop-blur-sm backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email}>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-paper-200' : '',
                        'py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-charcoal sm:pl-6 lg:pl-8',
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-paper-200' : '',
                        'hidden px-3 py-4 text-sm whitespace-nowrap text-warm-500 sm:table-cell',
                      )}
                    >
                      {person.title}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-paper-200' : '',
                        'hidden px-3 py-4 text-sm whitespace-nowrap text-warm-500 lg:table-cell',
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-paper-200' : '',
                        'px-3 py-4 text-sm whitespace-nowrap text-warm-500',
                      )}
                    >
                      {person.role}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1 ? 'border-b border-paper-200' : '',
                        'py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-8 lg:pr-8',
                      )}
                    >
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
