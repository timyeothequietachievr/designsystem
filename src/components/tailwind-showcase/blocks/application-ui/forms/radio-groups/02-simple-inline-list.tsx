// @ts-nocheck
"use client";

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function TailwindBlock() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-charcoal">Notifications</legend>
      <p className="mt-1 text-sm/6 text-warm-500">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-paper before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label
              htmlFor={notificationMethod.id}
              className="ml-3 block text-sm/6 font-medium text-charcoal"
            >
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
