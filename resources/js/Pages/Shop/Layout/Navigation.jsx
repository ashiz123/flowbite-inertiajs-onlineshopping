import React, {useEffect, useState, useContext} from 'react'
import {  HiShoppingBag,} from 'react-icons/hi';
import { router, usePage, Link} from '@inertiajs/react';
import Cart from '../Cart';
import CartContext from '../Contexts/CartContext';





export default function Navigation() {

    const {auth, carts} = usePage().props;
    const [slideOn, setSlideOn] = useState(false);
    const [toggle , setToggle] = useState(false);
    const [megaMenu , setMegaMenu] = useState(false);
    const { cartItems, updateStatus } = useContext(CartContext); //getting cartItems from context for updated cart quantity
    

    const [updatedCart, setUpdatedCart] = useState(carts);
    const totalQuantity = updatedCart.reduce((total, updatedCart) => total + updatedCart.quantity, 0);


    useEffect(() => {
        //if cartitems changed statement works otherwise keep the existing carts items
        if(updateStatus)
       {
         setUpdatedCart(cartItems);
       }
    })

    
    

    const [slideOver, setSlideOver] = useState({
        background: 'opacity-0',
        panel : ' translate-x-full'
    });


    function closeSlideOver()
        {
            setSlideOver({...slideOver, 
                background: ' opacity-0',
                panel: 'translate-x-full',
            });
            setSlideOn(false);
            
        }


        function openSlideOver(e)
        {
            console.log('open slide over');
            setSlideOn(true);
            setSlideOver({...slideOver, 
                background: ' opacity-100',
                panel: 'translate-x-0',
            });
           
        }



        
        const logout = async (e) => {
            e.preventDefault();
            if (window.confirm("Do you want to logout ?")) {
                await router.post('/shop/logout');
              }
           
            }

            function handleDropDown()
            {
                setToggle(!toggle);
            }

            function handleMegaMenu()
            {
                setMegaMenu(!megaMenu)
            }

   
   
 
  return (

    
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href={route('shop.index')} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Onine-App</span>
        </a>

        
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">

         {
            auth.user   ? 
            <>
            

    <button id="dropdownDefaultButton" onClick={handleDropDown} className="  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >{auth.user.name} 
    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
    {/* set inset: "30%" from small screen */}
    <div id="dropdown" style={{ inset :'7% auto auto auto'}} class= {`z-10 absolute ${toggle ? "block " : "hidden"} p bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        {/* <a href= {route('shop.profile.create')} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a> */}
        <Link  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Profile </Link>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick = {logout}>Sign out</a>
      </li>
    </ul>
    </div>


              <button onClick={(e) => openSlideOver(e)} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
               <HiShoppingBag />
                
                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {totalQuantity}
                </span>
                </button>

            


            {
                slideOn &&
                <Cart closeSlideOver = {closeSlideOver}  slideOver = {slideOver} style ={{zIndex: "auto"}}/>
            }
            
            </>
             
            :
            <>
            <a href= {route('shop.user.showLogin')} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            <a href= {route('shop.user.showRegister')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
            </>
             }
            


            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href={route('shop.index')}className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                {/* data-dropdown-toggle="mega-menu-dropdown"  */}
                    <button id="mega-menu-dropdown-button" onClick={handleMegaMenu} className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Categories <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg>
                    </button>
                    <div id="mega-menu-dropdown" className={`absolute z-10 grid  ${megaMenu ? "block " : "hidden"} w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`}>
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  )
}
