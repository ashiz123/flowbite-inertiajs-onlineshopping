import React from 'react'
import { usePage } from '@inertiajs/react';
import {Order} from './order.jsx';
import Template from '../Layout/Template.jsx';



export default function Orders() {
   
    const{orders, status} = usePage().props;
    
return (
    <Template pageHeading = "Create Product"> 
        <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr><th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer name
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Order number
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>

            </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => (
             <Order key = {index}  order = {order} status = {status}/>
        ))}
            
           
           
            
        </tbody>
    </table>
</div>
   
    </Template>
  )
}
