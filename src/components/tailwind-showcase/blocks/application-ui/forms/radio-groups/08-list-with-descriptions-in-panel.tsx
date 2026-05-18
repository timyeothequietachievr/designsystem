// @ts-nocheck
"use client";

const settings = [
  { id: 'public', name: 'Public access', description: 'This project would be available to anyone who has the link' },
  {
    id: 'private-to-project-members',
    name: 'Private to project members',
    description: 'Only members of this project would be able to access',
  },
  { id: 'private-to-you', name: 'Private to you', description: 'You are the only one able to access this project' },
]

export default function TailwindBlock() {
  return (
    <fieldset aria-label="Privacy setting" className="-space-y-px rounded-md bg-paper">
      {settings.map((setting) => (
        <label
          key={setting.id}
          aria-label={setting.name}
          aria-description={setting.description}
          className="group flex border border-paper-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-ember-100"
        >
          <input
            defaultValue={setting.id}
            defaultChecked={setting.id === 'public'}
            name="privacy-setting"
            type="radio"
            className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-paper before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span className="ml-3 flex flex-col">
            <span className="block text-sm font-medium text-charcoal group-has-checked:text-indigo-900">
              {setting.name}
            </span>
            <span className="block text-sm text-warm-500 group-has-checked:text-indigo-700">
              {setting.description}
            </span>
          </span>
        </label>
      ))}
    </fieldset>
  )
}
