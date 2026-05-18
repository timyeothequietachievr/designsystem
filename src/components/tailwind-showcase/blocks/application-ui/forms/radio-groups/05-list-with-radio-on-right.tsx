// @ts-nocheck
"use client";

const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default function TailwindBlock() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-charcoal">Transfer funds</legend>
      <p className="mt-1 text-sm/6 text-warm-500">Transfer your balance to your bank account.</p>
      <div className="mt-2.5 divide-y divide-gray-200">
        {accounts.map((account, accountIdx) => (
          <div key={accountIdx} className="relative flex items-start pt-3.5 pb-4">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={`account-${account.id}`} className="font-medium text-charcoal">
                {account.name}
              </label>
              <p id={`account-${account.id}-description`} className="text-warm-500">
                {account.description}
              </p>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={account.id === 'checking'}
                id={`account-${account.id}`}
                name="account"
                type="radio"
                aria-describedby={`account-${account.id}-description`}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-paper before:absolute before:inset-1 before:rounded-full before:bg-paper not-checked:before:hidden checked:border-indigo-600 checked:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
