// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-paper-soft sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
