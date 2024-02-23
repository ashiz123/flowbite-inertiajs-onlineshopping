import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react';
import axios from 'axios';

export default function UserInfo() {

    const { auth, address_api } = usePage().props;
    const [firstAddress, setFirstAddress] = useState('')

    const firstname = auth.user.name.split(' ')[0]
    const lastname = auth.user.name.split(' ')[1];
    const [addressId, setAddressId] = useState(null)

   

   console.log(addressId);

   

    
    // const postcode_lookup = "https://api.getAddress.io/get/YzlkOTMzNGZjYmI4NDhlIDgzODQzMCAyZTYwMTRhMmI0MmI2NWM=?api-key=tmDFKC3dX0uThev6G9935A41887"
 

    
    

    function changeFirstAddress(e)
    {
      e.preventDefault();
      setFirstAddress(e.target.value);
      axios.get(`https://api.getAddress.io/autocomplete/{${e.target.value}}?api-key=${address_api}`).then(function(response) {
        console.log(response.data.suggestions[0]);
        setAddressId(response.data.suggestions[0].id);
       })
    }

   

    
    


  return (
    <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Address Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" disabled value={firstname} name="first-name" id="first-name" autoComplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" disabled value={lastname} name="last-name" id="last-name" autoComplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-4">
            <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" disabled name="email" value={auth.user.email} type="email" autoComplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          {/* <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" >
                <option>United kingdom</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div> */}
         <div style={{ margin:"30%" }}></div>
  
          <div class="col-span-3">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">First line of address</label>
            <div class="mt-2">
              <input type="text" value={firstAddress} onChange={changeFirstAddress} name="first-address" id="first-address" autoComplete="first-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-3">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Second line of address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autoComplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autoComplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="region" id="region" autoComplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>
  )
}
