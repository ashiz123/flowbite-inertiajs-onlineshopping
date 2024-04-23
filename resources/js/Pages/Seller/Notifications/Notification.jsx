import React, { useEffect, useState } from 'react'
import { Button , Badge} from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";
import axios from 'axios';
import { Link } from '@inertiajs/react';



export default function Notification({notification}) {

  const[read, setRead] = useState(notification.read_at);

  

 

  function onReadNotification()
  {
    const fetchReadNotification = async() => {
      await axios.put(`/read-notification/${notification.id}`)
      .then((response) =>{
        console.log(response);
        setRead(response.data.read_at)
      })
      .catch((error) => console.log(error))
    }

    fetchReadNotification();
  }

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
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{notification.data.title}</p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{notification.data.message}</p>
        {
          notification.data.url && 
          
          <Link href = {notification.data.url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {notification.data.order_number && notification.data.order_number}</Link>
          
        }
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {
          read?
          <Badge icon={HiCheck} />
          :
          <Button size="xs" onClick={onReadNotification}>Read</Button>
        }
      
      </div>
    </div>
  </li>
  )
}
