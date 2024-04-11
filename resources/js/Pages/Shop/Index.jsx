import React, {useEffect, useState} from 'react'
import Layout from './Layout/Layout';
import { router, useForm } from '@inertiajs/react';
import { checkUserLoggedIn, loggedInUser } from '@/Functions/LoggedInUser';
import { useDispatch } from 'react-redux';
import { usePage } from '@inertiajs/react';

export default function Index({products}) {
   
  // const dispatch = useDispatch();
  
  //checking either page logged in or not
  // checkUserLoggedIn(dispatch)
  // const imagePath = '/storage/images/blazzer.jpeg' ;
  console.log(usePage().props);
  function productOverview(id){
    router.get('/shop/product/' + id + '/overview');
  }
 
  return (
   <Layout className = "m-4">
    <section  >
    <div className="grid md:grid-cols-3">
                    <div className="relative overflow-hidden group ">
                        <a href="" className="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" className="group-hover:scale-110 duration-500" alt="" />
                            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Ladies Wear</span>
                        </a>
                    </div>
                    
                    <div className="relative overflow-hidden group">
                        <a href="" className="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" className="group-hover:scale-110 duration-500" alt="" />
                            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Kids Wear</span>
                        </a>
                    </div>
                    
                    <div className="relative overflow-hidden group">
                        <a href="" className="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" className="group-hover:scale-110 duration-500" alt="" />
                            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Gents Wear</span>
                        </a>
                    </div>
      </div>
      </section>
  <div className = "m-4 ">

      {/* section 1 start  */}
      {/* product lists */}
  <div className="bg-white ">
  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
    {
      products.map(product => {
        const imagePath = '/storage/' + product.photos[0].path
        return (
          <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src= {imagePath} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
              {/* route('editApplication', ['id' => 5]) */}
                <a  onClick= {()  => productOverview(product.id)} >
                  <span aria-hidden="true" className="absolute inset-0"></span>
                 {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p className="text-sm font-medium text-gray-900">£{product.minimum_price}</p>
          </div>
        </div>
        )
      })
    }
          
         
           
          
        </div>
  </div>
  {/* product lists end*/}
  {/* section 1 end */}

  <hr className="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700"></hr>
  <center>
  <h1 className="mb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bunch your style - <span className="text-blue-600 dark:text-blue-500">Everything you looking for</span> </h1>
  </center>


  <hr className="w-8 h-8 mx-auto my-8 "></hr>

  {/* section 2 start */}
  <div className="flex flex-row space-x-4">


      {/* categories */}
    <div className="basis-1/4">
    <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Category title
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
    </div>
    {/* categories finish */}
    





  {/* featured product start  */}
    <div className=" flex  space-y-4 flex-col">
      <div>
          <center>
          <h4 className="text-2xl font-bold dark:text-white ">Featured Products</h4>
          </center>
      
      </div>
      <div>
        <div className = "flex flex-row space-x-2 m-4">
          <div className ="flex-1">
          <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
          <div className ="flex-1"> <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          <div className ="flex-1"> <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          <div className ="flex-1"> <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          </div>
      </div>
    </div>
  {/* featured product finish */}

  </div>
  {/* section 2 end */}



  </div>

<div className="flex content-center flex-wrap bg-gray-100 h-80">
  <div className="w-1/4 p-2">
    <div className="text-gray-700 flex items-center justify-center h-60 bg-blue-300 p-2 m-5 rounded-lg shadow-xl  ">
    <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> "Fastest Delivery "</p>
    </div>
  </div>
  <div className="w-1/4 p-2">
    <div className="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
    <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> "Free Delivery "</p>
    </div>
  </div>
  <div className="w-1/4 p-2">
  <div className="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
  <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> "24/7 support"</p>
  </div>
  </div>
  <div className="w-1/4 p-2">
  <div className="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
  <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> "Free Return "</p>
  </div>
  </div>
 
</div>

<hr className="w-8 h-8 mx-auto my-8 "></hr>


<div className = "m-4">
   <div className="flex items-center">
     <div className="flex-1"> category 1</div>
     <div className="flex-1"> category 2</div>
     <div className="flex-1"> category 3</div>
   </div>
</div>


</Layout>
  )
}
