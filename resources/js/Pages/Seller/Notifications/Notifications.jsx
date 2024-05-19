import React from 'react'
import { Card } from "flowbite-react";

import { Sub_heading } from '@/Components/heading';
import Notification from './Notification';
import { Link } from '@inertiajs/react';



export default function Notifications({notifications}) {
  console.log(notifications);
  return (
    <div className="overflow-x-auto">

     <Sub_heading>Recent Activity</Sub_heading>
     <Card >
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        {/* <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a> */}
        <Link   href={route('notifications.index')} className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">View previous</Link>
      </div>

      <div className="flow-root">
        {
          notifications && notifications.length > 0 ? 
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

          : <div className='text-gray-500'> No notification found </div>
        }
        
      </div>
    </Card>
    </div>

        


  )
}
