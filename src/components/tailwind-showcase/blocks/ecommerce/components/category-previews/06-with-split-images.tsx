// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-paper-soft">
        <body class="h-full">
        ```
      */}
      <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex">
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-paper/75">Self-Improvement</h2>
            <p className="mt-1 text-2xl font-medium text-paper">Journals and note-taking</p>
            <a
              href="#"
              className="mt-4 rounded-md bg-paper px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-paper-soft"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="relative flex">
          <img
            alt=""
            src="/assets/logo-tqa.jpg"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-paper/75">Desk and Office</h2>
            <p className="mt-1 text-2xl font-medium text-paper">Work from home accessories</p>
            <a
              href="#"
              className="mt-4 rounded-md bg-paper px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-paper-soft"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
