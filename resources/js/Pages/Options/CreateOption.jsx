import React, {useState} from 'react'
import { router } from '@inertiajs/react';


import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';


import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';

import '../../../css/app.css';

export default function CreateOption({product}) {

  

  const inputField= {
      'title' : '',
      'sku' : '',
      'size' : '',
      'color': '',
      'origin': '',
      'type' : '',
      'quantity': '',
      'price': '',
      }

    
  const [options, setOptions] = useState([inputField]);
  const [error, setError] = useState(null)

  

  const data = {
    options : options,
    product : product
  }


  const divWidth300 = {
    width : '300px'
  };

 

  function handleInputChange(e, index)
  {
    e.preventDefault();
    let data = [...options];
    data[index][e.target.name] = e.target.value;
    setOptions(data);
   } 

   const handleSubmit = async () => {
    // Your form submission logic using Inertia.post
    await router.post('/option/store', data);
    console.log('teting');
   
  }



  // function async handleSubmit(e)
  // {
  //   e.preventDefault();
  //   try{
  //     await Inertia.post('/option/store', data);
      
  //   }
  //   catch(error)
  //   {
  //       //handle error
  //       setError(error.message || 'An error occurred');
  //   }
    
  // }

  function addOption()
  {
    setOptions([...options, inputField])
  }

  function removeOption(i)
  {
    let data = options.filter((option, index) => index != i)
    setOptions(data);
   }


 


  return (
    <>
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7">
    <Heading>{product.title}</Heading>
    <div className="flex flex-wrap">
    <div className="basis-full flex-wrap ">


      
    <form className="" onSubmit={handleSubmit}>
    <div> <Button onClick={addOption}>Add Option</Button></div> 

    
    {
     options.map((option, index) => (
          <div className="flex flex-nowrap gap-3 m-5" key={index}>
          <div style= {divWidth300}> <TextInput placeholder='Enter title' name='title' value={option.title} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='SKU' name='sku' value={option.sku} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Size' name='size' value={option.size} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Color' name='color' value={option.color}  onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Origin' name='origin' value={option.origin} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Type' name='type' value={option.type} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Quantity' name='quantity' value={option.quantity}  onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Price' name='price' value={option.price} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div>  <Button onClick= {() => removeOption(index)}  color="failure" >Remove</Button></div>
          </div>
    ))}
    
    <div className='align-right'> 
        <Button onClick= {handleSubmit} color="success">Submit Option </Button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
     }
