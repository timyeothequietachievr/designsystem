// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="flex items-center">
      <div className="relative flex justify-start">
        <span className="bg-paper pr-3 text-base font-semibold text-charcoal">
          Projects
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
