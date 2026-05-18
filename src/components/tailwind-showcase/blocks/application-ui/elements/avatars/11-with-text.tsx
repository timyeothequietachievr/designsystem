// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <a href="#" className="group block shrink-0">
      <div className="flex items-center">
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block size-9 rounded-full outline -outline-offset-1 outline-black/5"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-warm-700 group-hover:text-charcoal group-hover:dark:text-paper">
            Tom Cook
          </p>
          <p className="text-xs font-medium text-warm-500 group-hover:text-warm-700 group-hover:dark:text-gray-300">
            View profile
          </p>
        </div>
      </div>
    </a>
  )
}
