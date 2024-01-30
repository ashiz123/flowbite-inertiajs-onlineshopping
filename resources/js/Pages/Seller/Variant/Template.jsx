import React, {useState, useReducer} from 'react';


import { Button, Checkbox, Label, TextInput, Select, Table } from 'flowbite-react';
import { router, usePage } from '@inertiajs/react'; 

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';
import Variant from './Variant';
import {VariantReducer} from '../../../Reducers/VariantReducer';
import { IoMdAdd } from 'react-icons/io';

const initialItems = [
  {
    id: 1,
    product_variant_id: 1,
    color: "blue",
    size: '10',
    type: 'type 1'
  },


];




export default function Template({product, variants}) {

  const [input, setInput] = useState({
     'product_id': 1,
     'size' : '',
     'type': '',
     'color': ''
  })
  console.log(variants);
  const [items, setItems] = useState(initialItems);

  let nextId = 1;


  // const [datas, dispatch] = useReducer(VariantReducer, initialTodos);


    function handleChange(e)
    {
      const {name, value} = e.target;
      setInput({...input, [name]: value})
     
    }

    function handleSubmit(e)
    {
      e.preventDefault();
      console.log(input);
      dispatch({ type: "ADD_VARIABLE_VALUE" , payload: input});
    }

    function addRow()
    {
      setItems([...items, {
        id: nextId++,
        product_variant_id: 1,
        color: "blue",
        size: '10',
        type: 'type 1'
      }])
    }

  return (
    <>
      
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7 ">
      <Heading>Set Variant</Heading>
     
      <div className='mb-3'>
         <Button  onClick={addRow} > Add Variant </Button>
      </div>
      
      <form onSubmit={handleSubmit}>
     <Table>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        {/* {
          variants.map((v) => {
            
            return(
              <Table.HeadCell>{v.variant}</Table.HeadCell>
            )
            
          })
        } */}
        
        {/* <Table.HeadCell>Size</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell> */}

      <Table.HeadCell>
          <span className="sr-only">Actions</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">

    {
      items.map((item) => {
        return(
          
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {product.title}
          </Table.Cell>

          {
          variants.map((v) => {
            
            return(
              <Table.Cell>
              <input type="text" className=' border-inherit rounded-md'/>
              </Table.Cell>
            )
            
          })
        } */}

          
          <Table.Cell>
          <input type="text" className=' border-inherit rounded-md'/>
          </Table.Cell>
          <Table.Cell>
          <input type="text" className=' border-inherit rounded-md'/>
          </Table.Cell>
          <Table.Cell>
            <input type="text" className=' border-inherit rounded-md'/>
          </Table.Cell>
         
             <Table.Cell> 
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        )
      })
    }

      
      

        
        
        
      </Table.Body>
    </Table>
 

            </form>
<br /><br />
            {/* <div>
        {
          datas.map(
            (data) => {
              return (
                <div> {data.value} </div>
              )
            }
          )
        }
      </div> */}

      </div>

      
      </div>

      
      </>
  )
}
