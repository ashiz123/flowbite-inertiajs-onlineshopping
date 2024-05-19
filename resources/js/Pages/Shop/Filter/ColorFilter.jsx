
import React, { useEffect, useState } from 'react'
import { router, usePage } from '@inertiajs/react';
import axios from 'axios';
// import useCheckboxes from '@/CustomHooks/useCheckboxes';


const initialColorState = {
  white:false,
  black: false,
  blue: false,
  red: false,
  green: false,
  purple:false,
  pink: false,
  yellow: false
}

export default function ColorFilter() {
  const url = usePage().url;
  const [checkboxes, setCheckboxes] = useState(initialColorState);


 function handleCheckboxChange(event) 
  {
    const{name, checked} = event.target;
    setCheckboxes((prevCheckboxes) => ({...prevCheckboxes, [name]: checked}));

    if(checked === true)
      {
        router.visit(`${url}`, {
          preserveState: true,
          method: 'get',
          data: {
            color: name,
            },
        })
      }
    

  }



const applyFilters = async(fieldName) =>
  {
      
    await axios.get(`${url}&color=${fieldName}`).then((response) => {
        console.log(response)
    })
  }

return (
    <div classname="border-b border-gray-200 py-6">
              <h3 classname="-my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                  <span class="font-medium text-gray-900">Color</span>
                  <span class="ml-6 flex items-center">
                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              {/* <!-- Filter section, show/hide based on section state. --> */}
              <div class="pt-6 " id="filter-section-0">
              <div class="space-y-4">

                {Object.keys(checkboxes).map((color,index) => (
                   <div class="flex items-center" key={color}>
                   <input id={`filter-color-${index}`} name= {color}  defaultChecked={checkboxes[color]}  onChange={handleCheckboxChange} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                   <label htmlFor="filter-color-0" class="ml-3 text-sm text-gray-600">{color}</label>
                   </div>
                ))}
               
                 
               </div>

              </div>
            </div>
  )
}
