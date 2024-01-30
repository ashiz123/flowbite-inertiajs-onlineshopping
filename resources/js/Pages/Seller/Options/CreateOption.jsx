import React, {useState, useRef} from 'react'
import { router, useForm } from '@inertiajs/react';


import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';


import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';

import '../../../../css/app.css';

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
      'avatar': null
      }

    
  const [options, setOptions] = useState([inputField]);
  
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState([]);


console.log(options);

  const data = {
    options : options,
    product : product
  }


  const divWidth200 = {
    width : '200px'
  };

 

  function handleInputChange(e, index)
  {
    e.preventDefault();
    let data = [...options];
    data[index][e.target.name] = e.target.value;
    setOptions(data);
   } 

   const handleSubmit = async () => {
    //  const formData = new FormData();
    //  formData.append('variants', data);
    // Your form submission logic using Inertia.post
     await router.post('/option/store', data);
    }

  function addOption()
  {
    setOptions([...options, inputField])
  }

  function removeOption(i)
  {
    let data = options.filter((option, index) => index != i)
    setOptions(data);
   }

   //To create event on picture click refrencing the input field
  function handleClickImage()
  {
    fileInputRef.current.click();
  }


  //To store image in state
  function handleFileChange(e, index)
  {
    const selectedFile = e.target.files[0];

    //Display image after file change with adding column of input *
    if(selectedFile)
    {
      const reader = new FileReader();
      reader.onloadend = () => {
        const preview = [...imagePreview];
        console.log(preview);
        preview[index] = reader.result
        console.log(preview[index]);
        setImagePreview(preview)
      }
      reader.readAsDataURL(selectedFile);
    }

    let data = [...options];
    data[index][e.target.name] = selectedFile;
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
      
     options.map((option, index) => { 

        // <Option option = {option} index = {index} />
            
          return (<div className="flex flex-nowrap gap-3 m-5 p-5" key={index} >

          {/* For image processing and displaying */}
          <div>
            {
              imagePreview[index] ?
              <img src={imagePreview[index]} className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} /> 
              : 
              <img className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} src= "/storage/images/placeholder1.png" onClick = {handleClickImage}/>
            }
          <TextInput type="file" accept="images/*" style={{ display: 'none' }} placeholder='image' name='avatar'  onChange={(e) =>handleFileChange(e, index)} ref={fileInputRef}></TextInput>
          </div>
           {/* For image processing and displaying */}

          <div style= {divWidth200}> <TextInput placeholder='Enter title' name='title' value={option.title} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='SKU' name='sku' value={option.sku} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Size' name='size' value={option.size} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Color' name='color' value={option.color}  onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Origin' name='origin' value={option.origin} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Type' name='type' value={option.type} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Quantity' name='quantity' value={option.quantity}  onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div> <TextInput placeholder='Price' name='price' value={option.price} onChange={(e)=>handleInputChange(e, index)}></TextInput></div>
          <div>  <Button onClick= {() => removeOption(index)}  color="failure" >Remove</Button></div>
          </div>

          )})}
    
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
