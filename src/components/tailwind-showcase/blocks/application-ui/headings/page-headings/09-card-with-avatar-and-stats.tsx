// @ts-nocheck
"use client";

const user = {
  name: 'Rebecca Nicholas',
  role: 'Product Designer',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden rounded-lg bg-paper shadow-sm">
      <h2 id="profile-overview-title" className="sr-only">
        Profile Overview
      </h2>
      <div className="bg-paper p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="shrink-0">
              <img
                alt=""
                src={user.imageUrl}
                className="mx-auto size-20 rounded-full"
              />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-warm-500">Welcome back,</p>
              <p className="text-xl font-bold text-charcoal sm:text-2xl">{user.name}</p>
              <p className="text-sm font-medium text-warm-500">{user.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-charcoal shadow-xs inset-ring inset-ring-gray-300 hover:bg-paper-soft"
            >
              View profile
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-paper-200 bg-paper-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
            <span className="text-charcoal">{stat.value}</span>{' '}
            <span className="text-warm-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
