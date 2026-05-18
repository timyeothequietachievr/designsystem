// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-charcoal/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-ember has-focus-visible:outline-2">
      <span className="size-5 rounded-full bg-paper shadow-xs ring-1 ring-charcoal/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
      <input
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 size-full appearance-none focus:outline-hidden"
      />
    </div>
  )
}
