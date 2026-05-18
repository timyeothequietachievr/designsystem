// @ts-nocheck
"use client";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function TailwindBlock() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden bg-paper px-4 py-4 shadow-sm sm:rounded-md sm:px-6"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
