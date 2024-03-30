import React from 'react'
import Layout from '../Layout/Layout'

export default function () {
  return (
    <Layout className = "m-4">
   
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          < span style={{color:"red"}}>OOPS!</span> I missed something <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span> Shop<span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      </div>

      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Thankyou, Your satisfaction is our motivation</h1>
        <p class="mt-1 text-lg leading-8 text-gray-600">
          Check your email for the order receipt. Enjoy your product soon. 
        </p>
      </div>
      

    </Layout>


  )
}
