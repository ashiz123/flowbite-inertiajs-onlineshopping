import React, { useEffect, useState } from 'react'
import OrderDropDown from './OrderDropDown';
import axios from 'axios';
import { router } from '@inertiajs/react';

export  function Order({order, status}) {

    const [thisOrder, setThisOrder] = useState(order);
   
    console.log(order);

   

    const updateStatus = (data) => 
    {
       setThisOrder({...thisOrder, status : data})
    }


    function showOrder(orderNumber)
    {
        router.get(`/orders/show/${orderNumber}`);
    }
   return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">
               1
           </td>
           <td class="px-6 py-4">
               {thisOrder.order_number}
           </td>
           <td class="px-6 py-4">
               {thisOrder.customer.name}
           </td>
          
           <td class="px-6 py-4">
               {thisOrder.customer.email}
           </td>
          <td class="px-6 py-4">
               {thisOrder.total_amounts}
           </td>
           <td class="px-6 py-4">
               {thisOrder.status.title}
           </td>
           <td class="px-6 py-4">
           <div class="flex flex-row ">
           <div class="basis-1/2">
           <button type="button" onClick={() => showOrder(thisOrder.order_number)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
           </div>
            <div class="basis-1/2">
            <OrderDropDown selectedStatusId = {thisOrder.status.id} orderNumber = {thisOrder.order_number} changeCurrentStatus = {updateStatus} statuses = {status}/>
            </div>
            </div>
          
          
           </td>
           
       </tr>
  )
}
