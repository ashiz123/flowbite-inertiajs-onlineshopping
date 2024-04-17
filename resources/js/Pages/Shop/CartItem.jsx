import React, { useContext } from 'react'
import CartContext from './Contexts/CartContext'
import { usePage } from '@inertiajs/react';

export default function CartItem({ item, removeItemFromCart, incrementItemInCart, decrementItemInCart}) {

    const imagePath = '/storage/' + item.image
    const {updateToCart } = useContext(CartContext);
    const increaseUrl = `/shop/increase-item-in-cart/${item.product_id}`;
    const decreaseUrl = `/shop/decrease-item-in-cart/${item.product_id}`;
    const removeItemUrl = `/shop/delete-cart-item/${item.product_id}`


    const{ziggy} = usePage().props;
    const checkoutLocation = 'http://localhost:8000/shop/checkout/create'
   

    function removeItem()
    {
        const fetchRemoveItemFromCart = async() => {
            await axios.delete(removeItemUrl)
            .then(response => {
               updateToCart(response.data); //context
               removeItemFromCart(response.data);//updating state of cart.jsx
            })
            .catch(error => console.log(error))
          }
      
          fetchRemoveItemFromCart();
    }

    

    function incrementItem()
    {
        
       const fetchIncrementItem  = async() => {
         await axios.put(increaseUrl, item)
         .then (response => {
           updateToCart(response.data);
           incrementItemInCart(response.data);
         })
         .catch(error => {
            console.log(error);
         })
       }

       fetchIncrementItem();

       

    }

    function decrementItem()
    {
        const fetchDecrementItem  = async() => {
            await axios.put(decreaseUrl, item)
            .then (response => {
              updateToCart(response.data);
              decrementItemInCart(response.data);
            })
            .catch(error => {
               console.log(error);
            })
          }

          fetchDecrementItem();

    }


  return (
    <> 
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
                              {/* {
                                item.variant ?
                                <p className="ml-4">${item.variant.price * item.quantity}.00</p>
                                : <p className="ml-4">${item.price * item.quantity}.00</p>
                              } */}

                                <p className="ml-4">${item.price * item.quantity}.00</p>
                             
                              
                            </div>
                            <div className="flex flex-row">
                              <div class="basis-1/2">
                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                {/* {
                                  item.variant ?
                                  <p className=" text-sm text-gray-500">£{item.variant.price}/unit</p>
                                  :
                                  <p className=" text-sm text-gray-500">£{item.price}/unit</p>
                                } */}
                                <p className=" text-sm text-gray-500">£{item.price}/unit</p>
                                
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

                           {
                              ziggy.location !== checkoutLocation ?
                              //cart quantity cant be changed on checkout page
                              <div className="flex flex-1 items-end justify-between text-sm">
                             {/* {item.quantity} */}
                            
                           
                           
                            <div class="relative flex items-center max-w-[8rem]">
                              {/* Decrease button */}
                                <button type="button" onClick={decrementItem} id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                              
                                <input type="text" value={item.quantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {/* increase button */}
                                <button type="button" onClick={incrementItem} id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            
                        
  
                            <div className="flex">
                              <button onClick={removeItem} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                            </div>
                          </div>

                           :  <p className="mt-1 text-sm text-gray-500">QTY: {item.quantity}</p> }
                          
                          
                        </div>
                      </li>
            </>
  )
}
