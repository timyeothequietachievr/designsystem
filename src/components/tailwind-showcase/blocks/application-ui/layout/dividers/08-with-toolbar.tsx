// @ts-nocheck
"use client";

import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-xs">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-paper px-3 py-2 text-warm-500 inset-ring inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-paper px-3 py-2 text-warm-500 inset-ring inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-paper px-3 py-2 text-warm-500 inset-ring inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-paper px-3 py-2 text-warm-500 inset-ring inset-ring-gray-300 hover:bg-paper-soft focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon aria-hidden="true" className="size-5" />
          </button>
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
