// @ts-nocheck
"use client";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-paper">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
