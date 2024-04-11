import React, {useState,useEffect, useContext} from 'react';
import { usePage, router } from '@inertiajs/react';
import axios from 'axios';





export default function Cart({slideOver, closeSlideOver}) {

  const { carts } = usePage().props;
  console.log(usePage().props);
  const totalAmount = carts.reduce((total, carts) => total + carts.price * carts.quantity, 0);
  const [updatedCarts, setUpdatedCarts] = useState(carts)




  useEffect(() => {
   getCartItems()
  })
 
 
  const getCartItems = async()  =>
  {
    try{
      await axios.get('/shop/get-cart-items')
      .then(response => {
        console.log(response);
        setUpdatedCarts(response.data);
      })
     .catch(error => console.error(error))
    }

    catch(error){
      console.error(error)
    }
   
  }
  
  
  function closeSlide()
    {
        return closeSlideOver();
    }

    function checkout()
    {
       router.get('/shop/checkout/create');
    }

  
   return (
    <>
    <div className=  {`relative z-10  ease-in-out duration-500  ${slideOver.background}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    
    

    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div   className= {`pointer-events-auto fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-500 sm:duration-700  ${slideOver.panel}`}>
           <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={closeSlide}>
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Close panel</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
  
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      
                      {
                       updatedCarts.map((item, i) => {
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
                              {
                                item.variant ?
                                <p className="ml-4">${item.variant.price * item.quantity}.00</p>
                                : <p className="ml-4">${item.price * item.quantity}.00</p>
                              }
                             
                              
                            </div>
                            <div className="flex flex-row">
                              <div class="basis-1/2">
                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                {
                                  item.variant ?
                                  <p className=" text-sm text-gray-500">£{item.variant.price}/unit</p>
                                  :
                                  <p className=" text-sm text-gray-500">£{item.price}/unit</p>
                                }
                                
                              </div>
                              <div class="basis-1/2">
                                {
                                  item.variant &&
                                  <>
                                  <p className="mt-1 text-sm text-gray-500">{item.variant.title}</p>
                                  <p className=" text-sm text-gray-500">{item.variant.color}</p>
                                  <p className=" text-sm text-gray-500">{item.variant.size}</p>
                                  </>
                                }
                              
                              </div>
                            </div>
                            <br />
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
  
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalAmount}.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <a onClick = {checkout} href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
