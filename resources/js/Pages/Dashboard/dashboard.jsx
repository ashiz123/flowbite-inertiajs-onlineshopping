'use client';
import { useState } from "react";
import Navigation from "@/Layouts/Navigation";
import AppSidebar from "@/Layouts/AppSidebar";
import {Heading, Sub_heading} from "@/Components/heading";



import { Table, Button } from 'flowbite-react';


const dashboard = ({products}) => 
{
 console.log(products.data);
  return (
    <>
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7">
    <Heading>Dashboard</Heading>
    <div className="flex flex-wrap">
  <div className="basis-1/2  p-3 ">

  <Table>
      <Table.Head>
        <Table.HeadCell>
          Product name
        </Table.HeadCell>
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Variant
        </Table.HeadCell>
        
       
      </Table.Head>
      <Table.Body className="divide-y">
        {
          products.data.length > 0 ?
          products.data.map((product, index) => {
            
            return(
            <Table.Row  key ={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {product.title}
          </Table.Cell>
          <Table.Cell>
            {product.category.title}
          </Table.Cell>
          <Table.Cell>
          {product.variant=== 1 ? <span className='text-green-700'>Variant</span> : <span className='text-red-700'> No variant </span>}
          </Table.Cell>
          
          
        </Table.Row>
          )})
          : 
          <Table.Row>
          <h2>
            <strong>No any products</strong>
          </h2>
          </Table.Row>
        }
        </Table.Body>
    </Table>
    <br />

    {
      products.data.length > 10 && 
      <nav aria-label="Page navigation example" style={{float: "right"}}>
      <ul class="inline-flex -space-x-px text-sm">
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
       
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>

    }

        {/* pagination start */}
        
       
          {/* pagination end */}
        
      
  </div>



  <div className="basis-1/2  p-3 ">
   {/* Orders section */}
  </div>
  

</div>
    
  </div>
  </div>
  </> 
 )
}

export default dashboard;


