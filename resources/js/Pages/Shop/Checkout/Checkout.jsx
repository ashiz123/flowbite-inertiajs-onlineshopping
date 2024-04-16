import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import InformationContainer from './InformationContainer';
import CartItems from '../CartItems';
import { usePage } from '@inertiajs/react';


export default function Create() {

const [validationFailed, setValidationFailed] = useState(null);
const {carts} = usePage().props;

const totalAmount = carts.reduce((totalAmount, carts) => totalAmount + carts.price * carts.quantity, 0);



console.log(carts);


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
                      
                      <CartItems />
                     {/* <!-- More products... --> */}
                    </ul>
                  </div>
                </div>
                <br />
                <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p >${totalAmount}.00</p>
                </div>
              </div>
              </div>

            </div>
            </div>
        
        
    </Layout>
  )
}
