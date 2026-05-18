// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden rounded-lg bg-paper shadow-sm">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="bg-paper-soft px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
