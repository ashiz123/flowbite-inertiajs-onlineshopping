import React from 'react';


import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';
import { Table, Button } from 'flowbite-react';

import Product from './Product';

export default function Products({products, categories}) {




  console.log(products)
  return (
    <> 
    <Navigation />
    <div className="flex">
      <AppSidebar />
    
      <div className=" flex-1 p-7 ">
      <Table>
      <Table.Head>
        <Table.HeadCell>
          SN
        </Table.HeadCell>
        <Table.HeadCell>
          Product Title
        </Table.HeadCell>
      
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Sub Category
        </Table.HeadCell>
        <Table.HeadCell>
          Variant
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
         {
            products.map((product, i) => {
            return (
                  <Product key= {i}   product ={product} products= {products} categories={categories}/>
              )
            })
          }
       </Table.Body>
    </Table>
      </div>
      </div>
    </>
  )
  }