// @ts-nocheck
"use client";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden bg-paper shadow-sm sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
