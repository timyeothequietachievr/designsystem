// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="bg-paper px-3 text-base font-semibold text-charcoal">
          Projects
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
