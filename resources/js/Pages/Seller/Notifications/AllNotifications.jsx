import React from 'react'
import Notification from './Notification';
import { Sub_heading } from '@/Components/heading';
import { Card } from 'flowbite-react';
import Template from '../Layout/Template';


export default function AllNotifications({notifications}) {


    const pageHeading = 'Notification';

  return (
    <Template pageHeading={pageHeading}>
    <div className="overflow-x-auto">

     <Sub_heading>History</Sub_heading>
     <Card >
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">All Customers</h5>
       
      </div>

      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {
                notifications.map((notification, i) => {
                  return (
                    <li>
                        <Notification key={i} notification = {notification}/>
                    </li>
                  )
                })
              }
          </ul>
      </div>
    </Card>
    </div>
    </Template>
  )
}
