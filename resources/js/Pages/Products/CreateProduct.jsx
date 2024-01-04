import React, {useState, useRef, createContext} from 'react'

import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { router } from '@inertiajs/react';


import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';
import {ProductContext} from './ProductContext';

import { Avatar } from 'flowbite-react';


const initialProduct  = {
    'title' : '',
    'description' : '',
    'category_id' : 0,
    'variant' : 0,
    'product_image': ''
}

export default function CreateProduct({categories, imageUrl}) {

const[product, setProduct] = useState(initialProduct);
const fileInputRef = useRef(null);


function handleChange(e)
{
  let name = e.target.name;
  let value = e.target.value;
  setProduct({...product, [name] : value})
}

function handleVariant()
{
  setProduct({...product, variant : !product.variant});
}
 
function handleSubmit(e)
{
  e.preventDefault();
  console.log(product);
  // router.post('/product/store', product);
}

function handleDivClick()
{
  fileInputRef.current.click();
}

const handleFileChange = (e) =>
{
  e.preventDefault();
  const selectedFile = e.target.files[0];
  // console.log(String(selectedFile.name));
  setProduct({...product, product_image: selectedFile.name});
}


  return (
    <> 
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7 ">
      <Heading>Create Product</Heading>

      <form className="flex max-w-md flex-col gap-4 g" onSubmit={handleSubmit}>
      <div>
        <div className="mb-1 block">
          <Label
            htmlFor="title"
            value="Title"
          />
        </div>
        <TextInput
          id="description"
          className='mb-4'
          placeholder="Product Name"
          required
          shadow
          type="text"
          value= {product.title}
          name= "title"
          onChange= {handleChange}
        />
      </div>
      <div>
        <div className=" block">
          <Label
            htmlFor="Description"
            value="description"
          />
        </div>
        
      </div>


      <div>
        <TextInput
          id="description"
          required
          shadow
          sizing="lg"
          type="text"
          placeholder="Description"
          value= {product.description}
          name='description'
          onChange= {handleChange}
          
        />
      </div>

    <div style={{marginTop: "5px"}}></div>
    <Label htmlFor="Description" value="Product Image" />
    <div className ="box-border h-32 w-32 p-4 border-2 " style={{cursor: 'pointer'}} onClick={handleDivClick}>
      <b>Upload photo</b>
      <TextInput type='file' hidden id="fileInput"  name="product_image" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
      {/* <img src = "/images/dummy.jpg"  size="sm" alt='dummy'/> */}
    </div>
      


      <div className='flex flex-row pt-5'>
        <div className="basis-1/2">
        <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Select Category"
        />
      </div>
      <Select
        id="category_id"
        name = 'category_id'
        onChange= {handleChange}
        value={product.category_id}
        required
      >
         

        {
          categories.map((category, i)=> {
           return(
            <option key={i} value= {category.id}>
              {category.title}
           </option>
           )
          })
        }
       
        
      </Select>
    </div>
        </div>
        <div className="basis-1/2 pl-10 pt-10">
        <div className="flex items-center gap-2 ">
        <Checkbox id="variant" name = "variant" type= "checkbox"  checked = {product.variant} onChange= {handleVariant}/>
        <Label htmlFor="publish">
          Variant
        </Label>
      </div>
        </div>
      </div>




      <Button type="submit">
        Next
      </Button>
    </form>
      </div>
      </div>
      
      </>
  )
}
