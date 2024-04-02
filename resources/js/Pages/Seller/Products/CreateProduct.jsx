import React, {useState, useRef, createContext, useEffect} from 'react'

import { Button, Checkbox, Label, TextInput, Select, Alert } from 'flowbite-react';
import { router, useForm } from '@inertiajs/react';



import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';




import { Avatar } from 'flowbite-react';


// const product  = {
//     'title' : '',
//     'description' : '',
//     'category_id' : 0,
    
//     }


export default function CreateProduct({categories}) {

// const[product, setProduct] = useState(initialProduct);
const fileInputRef = useRef(null);
const { data, setData, post, progress, error, processing, reset } = useForm({
 avatar: null,
 title: '',
 description : '',
 variant : 0,
 minimum_price : 0,
 quantity: 0
})
const[successMessage, setSuccessMessage] = useState(null)


function handleChange(e)
{
  
  let name = e.target.name;
  let value = e.target.value;
  setData({...data, [name] : value})
  
}

const handleFileChange = (e) =>
{
  e.preventDefault();
  const selectedFile = e.target.files[0];
  setData('avatar',selectedFile);
}

function handleVariant()
{
  setData({...data, variant : !data.variant});
}
 
function handleSubmit(e)
{
  e.preventDefault();
  post('/product/store', {onSuccess: () => {
       setSuccessMessage('Product added successfully');
       reset();
     }});
}



function handleDivClick()
{
  fileInputRef.current.click();
}

function handleQuantityChange(e)
{ 
  e.preventDefault();
  setData({...data, [e.target.name] : e.target.value});

}

// const imagePath = '/images/' + product.product_image;


  return (
    <> 
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7 ">
      <Heading>Create Product</Heading>
      {
        successMessage &&
        <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </Alert>
      }
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
          value= {data.title}
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
          value= {data.description}
          name='description'
          onChange= {handleChange}
          
        />
      </div>

    <div style={{marginTop: "5px"}}></div>
    <Label htmlFor="product_image" value="Product Image" />

    {
      data.avatar ? 
       <img src = "" size="sm" alt='dummy'/> 
      :
      <div className ="box-border h-32 w-32 p-4 border-2 " style={{cursor: 'pointer'}} onClick={handleDivClick}>
      <b>Upload photo</b>
      <TextInput type='file' accept=".jpeg, .png, .jpg, .gif" hidden id="fileInput"  name="product_image" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
      </div> 
    
    }
    
      


      <div className='flex flex-row pt-5 space-x-2'>
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
        value={data.category_id}
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

        
        <div className="basis-1/2 ">
          <div className="mb-2 block">
          <Label htmlFor="minimum_price" value="Set minimum price" />
          </div>

           <TextInput
            id="minimum_price"
            required
            shadow
            type="text"
            placeholder="Set minimum price"
            value= {data.minimum_price}
            name='minimum_price'
            onChange= {handleChange} />
        </div>
        
      </div>


      <div className='flex flex-row pt-5 space-x-2'>
      <div className="basis-1/2  pt-5">
        <div className="flex items-center gap-2 ">
        <Checkbox id="variant" name = "variant" type= "checkbox"  checked = {data.variant} onChange= {handleVariant}/>
        <Label htmlFor="publish">
          Variant
        </Label>
        </div>
        <div class="border-gray-200">
    <p class="px-3 text-gray-500 text-sm">If no variant, set the quantity</p>
    </div>
        </div>
        
{
          !data.variant &&
          <div className="basis-1/2 "   >
          <div className="mb-2 block">
          <Label htmlFor="quantity" value="Quantity" />
          </div>

           <TextInput
            id="minimum_price"
            required
            shadow
            type="number"
            placeholder="Set Quantity"
            name = "quantity"
            value = {data.quantity}
            onChange= {handleQuantityChange}
          />
          </div>
}
        
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
