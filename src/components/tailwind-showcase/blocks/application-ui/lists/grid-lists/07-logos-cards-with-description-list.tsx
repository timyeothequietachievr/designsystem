// @ts-nocheck
"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: '/assets/logo-tqa.jpg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: '/assets/logo-tqa.jpg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: '/assets/logo-tqa.jpg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]

export default function TailwindBlock() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => (
        <li
          key={client.id}
          className="overflow-hidden rounded-xl outline outline-gray-200"
        >
          <div className="flex items-center gap-x-4 border-b border-charcoal/5 bg-paper-soft p-6">
            <img
              alt={client.name}
              src={client.imageUrl}
              className="size-12 flex-none rounded-lg bg-paper object-cover ring-1 ring-charcoal/10"
            />
            <div className="text-sm/6 font-medium text-charcoal">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <MenuButton className="relative block text-warm-500 hover:text-warm-500">
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-paper py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-charcoal data-focus:bg-paper-soft data-focus:outline-hidden"
                  >
                    View<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-charcoal data-focus:bg-paper-soft data-focus:outline-hidden"
                  >
                    Edit<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-warm-500">Last invoice</dt>
              <dd className="text-warm-700">
                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-warm-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-charcoal">{client.lastInvoice.amount}</div>
                {client.lastInvoice.status == 'Paid' ? (
                  <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
                {client.lastInvoice.status == 'Withdraw' ? (
                  <div className="rounded-md bg-paper-soft px-2 py-1 text-xs font-medium text-warm-500 ring-1 ring-gray-500/10 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
                {client.lastInvoice.status == 'Overdue' ? (
                  <div className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}
