// @ts-nocheck
"use client";

export default function TailwindBlock() {
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-charcoal">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: '37.5%' }} className="h-2 rounded-full bg-ember" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-warm-500 sm:grid">
          <div className="text-ember">Copying files</div>
          <div className="text-center text-ember">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div>
        </div>
      </div>
    </div>
  )
}
