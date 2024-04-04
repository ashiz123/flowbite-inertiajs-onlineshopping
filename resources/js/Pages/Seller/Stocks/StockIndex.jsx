import React from 'react'

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import StockProduct from './StockProduct';
import { Table } from 'flowbite-react';
import { Heading } from '@/Components/heading';


export default function StockIndex({stocks}) {

 

  return (
    <> 
    <Navigation />
    <div className="flex">
      <AppSidebar />
       <div className=" flex-1 p-7 ">
       <Heading>Stocks</Heading>
       
       <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Variant name</Table.HeadCell>
          <Table.HeadCell>Quantity available</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
              stocks.map((stock, i) => {
              return(
                <StockProduct key= {i} stock={stock}/>
              )
            } )
          }
          
        </Table.Body>
      </Table>
      </div>
      </div>
      </>
  )
}


