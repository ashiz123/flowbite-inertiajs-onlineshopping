import React, {useState} from 'react';


import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { router, usePage } from '@inertiajs/react'; 

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';
import Variant from './Variant';
import {VariantReducer} from '../../../Reducers/VariantReducer';

const initialTodos = [
  {
    id: 1,
    product_variant_id: 1,
    value: blue
  },

  {
    id: 2,
    product_variant_id: 1,
    value: green
  },
  
];


export default function CreateVariant({product, variants}) {

  const [value, setValue] = useState({})
  const [variantsValue, dispatch] = useReducer(VariantReducer, initialTodos);


    function handleChange(e)
    {
      const {name, value} = e.target;
      setValue({...value, [name]: value})
    }

    function handleSubmit(e)
    {
      e.preventDefault();
      dispatch({ type: "ADD_VARIABLE_VALUE", payload:""  });
    }

  return (
    <>
      
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7 ">
      <Heading>Set attribute</Heading>
      <form onSubmit={handleSubmit}>
      {
        variants.map((variant, id) => {
          return(
            <>
            {variant.variant}
            <div className="relative">
            <input type="text" onChange={handleChange} name = {variant.variant}  id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Add value</label>
            </div>
            </>
            )
        })

      }
      <Button type='submit'>
              Submit
            </Button>
            </form>

      </div>
      </div>
      </>
  )
}
