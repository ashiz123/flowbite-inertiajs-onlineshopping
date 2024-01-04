'use client';
import { useState } from "react";
import Navigation from "@/Layouts/Navigation";
import AppSidebar from "@/Layouts/AppSidebar";
import {Heading, Sub_heading} from "@/Components/heading";



import { Table, Button } from 'flowbite-react';


const Dashboard = () => 
{
 
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
          Color
        </Table.HeadCell>
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17"
          </Table.Cell>
          <Table.Cell>
            Sliver
          </Table.Cell>
          <Table.Cell>
            Laptop
          </Table.Cell>
          <Table.Cell>
            $2999
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>
              Microsoft Surface Pro
            </p>
          </Table.Cell>
          <Table.Cell>
            White
          </Table.Cell>
          <Table.Cell>
            Laptop PC
          </Table.Cell>
          <Table.Cell>
            $1999
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>
            Black
          </Table.Cell>
          <Table.Cell>
            Accessories
          </Table.Cell>
          <Table.Cell>
            $99
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>


  

</div>
    
  </div>
  </div>
  </> 
 )
}

export default Dashboard;


