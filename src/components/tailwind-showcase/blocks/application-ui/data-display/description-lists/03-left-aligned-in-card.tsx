// @ts-nocheck
"use client";

import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function TailwindBlock() {
  return (
    <div className="overflow-hidden bg-paper shadow-sm sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base/7 font-semibold text-charcoal">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-warm-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-charcoal">Full name</dt>
            <dd className="mt-1 text-sm/6 text-warm-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-charcoal">Application for</dt>
            <dd className="mt-1 text-sm/6 text-warm-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-charcoal">Email address</dt>
            <dd className="mt-1 text-sm/6 text-warm-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-charcoal">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-warm-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-charcoal">About</dt>
            <dd className="mt-1 text-sm/6 text-warm-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm/6 font-medium text-charcoal">Attachments</dt>
            <dd className="mt-2 text-sm text-charcoal sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-paper-200"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-warm-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-charcoal">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-warm-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-ember hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-warm-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-charcoal">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-warm-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="#"
                      className="font-medium text-ember hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
