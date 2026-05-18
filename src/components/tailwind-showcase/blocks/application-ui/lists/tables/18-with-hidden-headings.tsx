// @ts-nocheck
"use client";

import { Fragment } from 'react'
import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'

const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

export default function TailwindBlock() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-base font-semibold text-charcoal lg:mx-0 lg:max-w-none">
          Recent activity
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className="text-sm/6 text-charcoal">
                      <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-paper-200 bg-paper-soft" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-paper-200 bg-paper-soft" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              aria-hidden="true"
                              className="hidden h-6 w-5 flex-none text-warm-500 sm:block"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm/6 font-medium text-charcoal">
                                  {transaction.amount}
                                </div>
                                {transaction.status === 'Paid' ? (
                                  <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
                                    {transaction.status}
                                  </div>
                                ) : null}
                                {transaction.status === 'Withdraw' ? (
                                  <div className="rounded-md bg-paper-soft px-2 py-1 text-xs font-medium text-warm-500 inset-ring inset-ring-gray-500/10">
                                    {transaction.status}
                                  </div>
                                ) : null}
                                {transaction.status === 'Overdue' ? (
                                  <div className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
                                    {transaction.status}
                                  </div>
                                ) : null}
                              </div>
                              {transaction.tax ? (
                                <div className="mt-1 text-xs/5 text-warm-500">
                                  {transaction.tax} tax
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute right-full bottom-0 h-px w-screen bg-paper-soft" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-paper-soft" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm/6 text-charcoal">{transaction.client}</div>
                          <div className="mt-1 text-xs/5 text-warm-500">
                            {transaction.description}
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              href={transaction.href}
                              className="text-sm/6 font-medium text-ember hover:text-indigo-500"
                            >
                              View<span className="hidden sm:inline"> transaction</span>
                              <span className="sr-only">
                                , invoice #{transaction.invoiceNumber}, {transaction.client}
                              </span>
                            </a>
                          </div>
                          <div className="mt-1 text-xs/5 text-warm-500">
                            Invoice <span className="text-charcoal">#{transaction.invoiceNumber}</span>
                          </div>
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
