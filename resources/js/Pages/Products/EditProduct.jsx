import React from 'react'
import {Modal, Button, Card } from 'flowbite-react';

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';

export default function EditProduct({product}) {


  console.log(product.variants.length)



  return (
    <> 
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7 ">
      <Heading>{product.title}</Heading>
       {/* category
       variants
       photos */}
       <Card
      className="max-w-sm"
      imgAlt="product picture"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {product.title}
      </h4>
      <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
       Category : {product.category.title}
      </h5>

      <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
        Variants 
      </h5>
      {
        (product.variants.length > 0) ?
        product.variants.map((variant, id) => {
          return(
            <Button pill key = {id} color = "blue" size="xs"> {variant.title} </Button>
          )
        }) : 'No variant found'
      }

      
      
      
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {product.description}
      </p>
      <Button>
        Edit
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>


      </div>
      </div>
    </>
  )
}
