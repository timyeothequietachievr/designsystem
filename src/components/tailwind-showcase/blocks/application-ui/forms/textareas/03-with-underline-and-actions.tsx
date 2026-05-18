// @ts-nocheck
"use client";

import { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/24/outline'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-paper', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-paper', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-paper', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-paper', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-paper', bgColor: 'bg-blue-500' },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIcon,
    iconColor: 'text-warm-500',
    bgColor: 'bg-transparent',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  const [selected, setSelected] = useState(moods[5])

  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full bg-paper-soft outline -outline-offset-1 outline-black/5"
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#">
          <div className="border-b border-paper-200 pb-px focus-within:border-b-2 focus-within:border-indigo-600 focus-within:pb-0">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Add your comment..."
              className="block w-full resize-none text-base text-charcoal placeholder:text-warm-500 focus:outline-none sm:text-sm/6"
              defaultValue={''}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="-m-2 inline-flex size-10 items-center justify-center rounded-full text-warm-500 hover:text-warm-500"
                >
                  <PaperClipIcon aria-hidden="true" className="size-6" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">Your mood</Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-warm-500 hover:text-warm-500">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <FaceSmileIcon aria-hidden="true" className="size-5 shrink-0" />
                            <span className="sr-only">Add your mood</span>
                          </span>
                        ) : (
                          <span>
                            <span
                              className={classNames(
                                selected.bgColor,
                                'flex size-8 items-center justify-center rounded-full',
                              )}
                            >
                              <selected.icon aria-hidden="true" className="size-5 shrink-0 text-paper" />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 -ml-6 w-60 rounded-lg bg-paper py-3 text-base shadow-sm outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="relative cursor-default bg-paper px-3 py-2 text-charcoal select-none data-focus:bg-paper-soft"
                        >
                          <div className="flex items-center">
                            <div
                              className={classNames(
                                mood.bgColor,
                                'flex size-8 items-center justify-center rounded-full',
                              )}
                            >
                              <mood.icon aria-hidden="true" className={classNames(mood.iconColor, 'size-5 shrink-0')} />
                            </div>
                            <span className="ml-3 block truncate font-medium">{mood.name}</span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-ember px-3 py-2 text-sm font-semibold text-paper shadow-xs hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
