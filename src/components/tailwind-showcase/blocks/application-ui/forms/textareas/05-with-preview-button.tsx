// @ts-nocheck
"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <form action="#">
      <TabGroup>
        <div className="group flex items-center">
          <TabList className="flex gap-2">
            <Tab className="rounded-md border border-transparent bg-paper px-3 py-1.5 text-sm font-medium text-warm-500 hover:bg-paper-soft hover:text-charcoal data-selected:bg-paper-soft data-selected:text-charcoal data-selected:hover:bg-gray-200">
              Write
            </Tab>
            <Tab className="rounded-md border border-transparent bg-paper px-3 py-1.5 text-sm font-medium text-warm-500 hover:bg-paper-soft hover:text-charcoal data-selected:bg-paper-soft data-selected:text-charcoal data-selected:hover:bg-gray-200">
              Preview
            </Tab>
          </TabList>

          {/* These buttons are here simply as examples and don't actually do anything. */}
          <div className="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex">
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-warm-500 hover:text-warm-500"
              >
                <span className="sr-only">Insert link</span>
                <LinkIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-warm-500 hover:text-warm-500"
              >
                <span className="sr-only">Insert code</span>
                <CodeBracketIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex size-10 items-center justify-center rounded-full text-warm-500 hover:text-warm-500"
              >
                <span className="sr-only">Mention someone</span>
                <AtSymbolIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <TabPanels className="mt-2">
          <TabPanel className="-m-0.5 rounded-lg p-0.5">
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <div>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                placeholder="Add your comment..."
                className="block w-full rounded-md bg-paper px-3 py-1.5 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                defaultValue={''}
              />
            </div>
          </TabPanel>
          <TabPanel className="-m-0.5 rounded-lg p-0.5">
            <div className="border-b border-paper-200">
              <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm text-charcoal">
                Preview content will render here.
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Post
        </button>
      </div>
    </form>
  )
}
