'use client';

import React, {useState} from 'react';
import Navigation from '@/Layouts/Navigation';
import AppSidebar from '@/Layouts/AppSidebar';

import { Table, Modal, Button } from 'flowbite-react';
import Category from './Category';
import { router } from '@inertiajs/react';







export default function Categories({categories}) {

 



  function deleteCategory(id)
  {
   
    router.delete(`category/delete/${id}`, {
      onBefore: () => confirm('Are you sure you want to delete this user?'),
    })
  }
  

  return (
    <>
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7">

    <Table>
      <Table.Head>
        <Table.HeadCell>
          SN
        </Table.HeadCell>
        <Table.HeadCell>
          Title
        </Table.HeadCell>
        <Table.HeadCell>
          Description
        </Table.HeadCell>
        <Table.HeadCell>
          Publish
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        
          {
            categories.map((cat, i) => {
            return (
                  <Category key= {i} category = {cat} categories ={categories} deleteCategory={(i) => deleteCategory(i)}/>
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


