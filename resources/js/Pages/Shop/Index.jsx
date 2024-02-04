import React from 'react'
import Layout from './Layout/Layout';
import { router } from '@inertiajs/react';

export default function Index({products}) {


  function productOverview(id){
    router.get('/shop/product/' + id + '/overview');
  }

  console.log(products);
  return (
   <Layout class = "m-4">
    <section>
    <div class="grid md:grid-cols-3">
                    <div class="relative overflow-hidden group ">
                        <a href="" class="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" class="group-hover:scale-110 duration-500" alt="" />
                            <span class="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Ladies Wear</span>
                        </a>
                    </div>
                    
                    <div class="relative overflow-hidden group">
                        <a href="" class="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" class="group-hover:scale-110 duration-500" alt="" />
                            <span class="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Kids Wear</span>
                        </a>
                    </div>
                    
                    <div class="relative overflow-hidden group">
                        <a href="" class="text-center">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" class="group-hover:scale-110 duration-500" alt="" />
                            <span class="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">Gents Wear</span>
                        </a>
                    </div>
      </div>
      </section>
  <div class = "m-4 ">

      {/* section 1 start  */}
      {/* product lists */}
  <div class="bg-white ">
  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
    {
      products.map(product => {
        const imagePath = '/storage/' + product.photo.path
        return (
          <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src= {imagePath} alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
              {/* route('editApplication', ['id' => 5]) */}
                <a  onClick= {()  => productOverview(product.id)} >
                  <span aria-hidden="true" class="absolute inset-0"></span>
                 {product.title}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p class="text-sm font-medium text-gray-900">£{product.minimum_price}</p>
          </div>
        </div>
        )
      })
    }
          
         
           
          
        </div>
  </div>
  {/* product lists end*/}
  {/* section 1 end */}

  <hr class="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700"></hr>
  <center>
  <h1 class="mb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Upgrade your living - <span class="text-blue-600 dark:text-blue-500">Everything you looking for</span> </h1>
  </center>


  <hr class="w-8 h-8 mx-auto my-8 "></hr>

  {/* section 2 start */}
  <div class="flex flex-row space-x-4">


      {/* categories */}
    <div class="basis-1/4">
    <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Category title
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
    </div>
    {/* categories finish */}
    





  {/* featured product start  */}
    <div class=" flex  space-y-4 flex-col">
      <div>
          <center>
          <h4 class="text-2xl font-bold dark:text-white ">Featured Products</h4>
          </center>
      
      </div>
      <div>
        <div class = "flex flex-row space-x-2 m-4">
          <div class ="flex-1">
          <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
          <div class ="flex-1"> <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          <div class ="flex-1"> <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          <div class ="flex-1"> <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div></div>
          </div>
      </div>
    </div>
  {/* featured product finish */}

  </div>
  {/* section 2 end */}



  </div>

<div class="flex content-center flex-wrap bg-gray-100 h-80">
  <div class="w-1/4 p-2">
    <div class="text-gray-700 flex items-center justify-center h-60 bg-blue-300 p-2 m-5 rounded-lg shadow-xl  ">
    <p class="text-2xl italic font-medium text-gray-900 dark:text-white"> "Fastest Delivery "</p>
    </div>
  </div>
  <div class="w-1/4 p-2">
    <div class="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
    <p class="text-2xl italic font-medium text-gray-900 dark:text-white"> "Free Delivery "</p>
    </div>
  </div>
  <div class="w-1/4 p-2">
  <div class="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
  <p class="text-2xl italic font-medium text-gray-900 dark:text-white"> "24/7 support"</p>
  </div>
  </div>
  <div class="w-1/4 p-2">
  <div class="text-gray-700 flex justify-center items-center bg-blue-300 p-2 m-5 h-60 rounded-lg shadow-xl ">
  <p class="text-2xl italic font-medium text-gray-900 dark:text-white"> "Free Return "</p>
  </div>
  </div>
 
</div>

<hr class="w-8 h-8 mx-auto my-8 "></hr>


<div class = "m-4">
   <div class="flex items-center">
     <div class="flex-1"> category 1</div>
     <div class="flex-1"> category 2</div>
     <div class="flex-1"> category 3</div>
   </div>
</div>


</Layout>
  )
}
