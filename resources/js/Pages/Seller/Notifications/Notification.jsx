import React from 'react'

export default function Notification({notification}) {

  console.log(notification);
  return (
    <li className="py-3 sm:py-4" >
    <div className="flex items-center space-x-4">
      <div className="shrink-0">
        {/* <Image
          alt="Michael image"
          height="32"
          src="/images/people/profile-picture-2.jpg"
          width="32"
          className="rounded-full"
        /> */}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{notification.data.message}</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
    </div>
  </li>
  )
}
