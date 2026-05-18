// @ts-nocheck
"use client";

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function TailwindBlock() {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-paper-200 bg-paper px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-warm-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">20</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-warm-700 inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-paper px-3 py-2 text-sm font-semibold text-warm-700 inset-ring inset-ring-gray-300 hover:bg-paper-soft"
        >
          Next
        </a>
      </div>
    </nav>
  )
}
