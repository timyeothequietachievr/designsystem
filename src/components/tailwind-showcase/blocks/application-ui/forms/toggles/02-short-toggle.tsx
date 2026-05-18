// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div className="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-indigo-600 has-focus-visible:outline-2">
      <span className="absolute mx-auto h-4 w-9 rounded-full bg-gray-200 inset-ring inset-ring-charcoal/5 transition-colors duration-200 ease-in-out group-has-checked:bg-ember" />
      <span className="absolute left-0 size-5 rounded-full border border-gray-300 bg-paper shadow-xs transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
      <input
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 size-full appearance-none focus:outline-hidden"
      />
    </div>
  )
}
