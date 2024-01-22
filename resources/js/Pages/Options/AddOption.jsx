import React, { useState, useRef, useEffect } from 'react'
import { router, useForm } from '@inertiajs/react';
// import { inertia } from '@inertiajs/inertia';


import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';
import { OptionInputField } from './Constants/OptionInputField';

import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

export default function AddOption({product}) {
  

  const { data, setData, put, processing, errors, reset } = useForm({
      title : '',
      sku : '',
      size : '',
      color: '',
      origin: '',
      type : '',
      quantity: '',
      price: '',
      avatar: null
    })

    // const[options, setOptions] = useState(product.variants) 
    const fileInputRef = useRef(null);
    const addFileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState();
    let path = '';


    

       
//onchange input
   function handleInput(e)
    {
        e.preventDefault();
        const{name, value} = e.target;
        setData((prevData) => ({...prevData, [name]: value}))
        
    }


  //to upload the image on div click 
    function handleClickImage()
    {
        addFileInputRef.current.click()
    }


  //on change file
    function handleFileChange(e)
    {
      console.log(e.target.name);
      e.preventDefault();
      const selectedFile = e.target.files[0];
    
      //Display image after file change with adding column of input *
      if(selectedFile)
      {
        const reader = new FileReader();
        reader.onloadend = () => {
          const preview = reader.result
          setImagePreview(preview)
         }
        reader.readAsDataURL(selectedFile);

     }
     
     setData((prevData) => ({...prevData, [e.target.name]: selectedFile}))
    }


  
    function submit (e) {
      e.preventDefault();
      
      router.post(`/option/updateVariant/${product.id}`, {
        _method: 'put',
        variant: data,
      });
      
      reset();
      setImagePreview();
    }


    function deleteVariant(id)
    { 
     
      router.post(`/option/deleteVariant/${id}`, {
        _method: 'delete',
      }, {onSuccess : () => {
        
         product.variants.filter((variant) => variant.id != id);
      }}
      );
      
      setImagePreview(undefined);
      
    }

    function handleClick()
    {
      console.log('testing');
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


    <form className="" onSubmit={submit}>  
    
    

          {/* For image processing and displaying */}
          {/* <div>
            {
              imagePreview[index] ?
              <img src={imagePreview[index]} className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} /> 
              : 
              <img className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} src= "/storage/images/placeholder1.png" onClick = {handleClickImage}/>
            }
          <TextInput type="file" accept="images/*" style={{ display: 'none' }} placeholder='image' name='avatar'  onChange={(e) =>handleFileChange(e, index)} ref={fileInputRef}></TextInput>
          </div> */}
           {/* For image processing and displaying */}

<section>
 {
    product.variants.map((option, i) => {


         
        if(option.photo != undefined)
        {
            path = '/storage/' + option.photo.path
        }else{
            path = '/storage/images/placeholder1.png'
        }
      
       
            
         return(
            
            <div className="flex flex-nowrap gap-3 m-5 p-5" key={i}>
            <img className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} src= {path} onClick = {handleClick}/>
            <TextInput type="file" accept="images/*" style={{ display: 'none' }} placeholder='image' name='avatar'  onChange={(e) =>handleFileChange(e)} ref={fileInputRef}></TextInput>
            <div > <TextInput placeholder='Enter title' name='title' value={option.title} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='SKU' name='sku' value={option.sku} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Size' name='size' value={option.size} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Color' name='color' value={option.color}  onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Origin' name='origin' value={option.origin} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Type' name='type' value={option.type} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Quantity' name='quantity' value={option.quantity}  onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div> <TextInput placeholder='Price' name='price' value={option.price} onChange={(e) => handleInputChange(e, i)}></TextInput></div>
            <div>  <Button  color="failure" onClick={() => deleteVariant(option.id)} >Remove</Button></div>
            </div>
            
        )
    })
  }
 </section>


{/* add more variant */}

        <div className="flex flex-nowrap gap-3 m-5 p-5">
        {
              imagePreview  ?
              <img src={imagePreview} className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} onClick = {handleClickImage}/> 
              : 
              <img className='w-20 h-20 rounded-full mx-auto cursor-pointer' style = {{marginTop: "-15px"}} src= "/storage/images/placeholder1.png" onClick = {handleClickImage}/>
        }
        <TextInput type="file" accept="images/*" style={{ display: 'none' }} placeholder='image' name='avatar'  onChange={(e) =>handleFileChange(e)} ref={addFileInputRef}></TextInput>
        <div > <TextInput placeholder='Enter title' name='title' value={data.title} onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='SKU' name='sku' value={data.sku} onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Size' name='size' value={data.size} onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Color' name='color' value={data.color}  onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Origin' name='origin' value={data.origin} onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Type' name='type' value={data.type} onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Quantity' name='quantity' value={data.quantity}  onChange={(e) => handleInput(e)}></TextInput></div>
        <div> <TextInput placeholder='Price' name='price' value={data.price} onChange={(e) => handleInput(e)}></TextInput></div>
        
        </div>
    


   <div className='align-right'> 
        <Button  type='submit' color="success">Submit Option </Button>
    </div>
</form>
 </div>
 </div>
 </div>
 </div>
 
 </>
        
  )}     
            
   

