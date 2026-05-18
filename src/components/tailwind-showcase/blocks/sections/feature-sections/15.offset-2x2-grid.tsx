// @ts-nocheck
"use client";

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Spam report',
    description:
      'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.',
    icon: TrashIcon,
  },
  {
    name: 'Compose in markdown',
    description:
      'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Email commenting',
    description:
      'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Customer connections',
    description:
      'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.',
    icon: HeartIcon,
  },
]

export default function TailwindBlock() {
  return (
    <div className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-display font-semibold tracking-tight text-pretty text-charcoal sm:text-5xl">
            Stay on top of customer support
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-charcoal">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-ember">
                    <feature.icon aria-hidden="true" className="size-6 text-paper" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-warm-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
