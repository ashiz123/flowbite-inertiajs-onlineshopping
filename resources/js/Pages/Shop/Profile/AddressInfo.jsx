import React from 'react'

export default function AddressInfo() {
  return (
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
        2
    </span>
    <span>
        <h3 className="font-medium leading-tight">Address info</h3>
        <p className="text-sm">Step details here</p>
    </span>
</li>
  )
}
