// @ts-nocheck
"use client";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function TailwindBlock() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-md bg-paper px-6 py-4 shadow-sm"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
