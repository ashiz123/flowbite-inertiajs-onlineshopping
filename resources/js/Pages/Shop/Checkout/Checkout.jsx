import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import {usePage} from '@inertiajs/react';
import InformationContainer from './InformationContainer';


export default function Create() {

const {carts} = usePage().props
const [validationFailed, setValidationFailed] = useState(null);


function checkoutFailed(message)
{
   setValidationFailed(message);
}

return (
    <Layout>
        <div class="flex flex-row">
        <div class="basis-3/4">
        <h6 class="text-2xl font-bold dark:text-white">CHECKOUT FORM</h6>
        <br />
        {validationFailed && 
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium">{''}</span> {validationFailed}
          </div>
          }
         {/* checkout unsuccefull alert */}
       
        
        
        {/* container for submiting user */}
           <InformationContainer checkoutFailed = {checkoutFailed}/>       
        </div>
        <div class="basis-1/4">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                  <div className="ml-3 flex h-7 items-center">
                    
                  </div>
                </div>
  
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      
                      {
                        carts?.map((item, i) => {
                          const imagePath = '/storage/' + item.image
                          return(
                            <span key = {i}> 
                              <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={imagePath} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                        </div>
  
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{item.name}</a>
                              </h3>
                              <p className="ml-4">${item.price * item.quantity}.00</p>
                              
                            </div>
                            <p className="mt-1 text-sm text-gray-500">category title</p>
                            <p className=" text-sm text-gray-500">£{item.price}/unit</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty {item.quantity}</p>
  
                            <div className="flex">
                              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                            </span>
                          )
                        })
                       
                      }
                     {/* <!-- More products... --> */}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            </div>
        
        
    </Layout>
  )
}
