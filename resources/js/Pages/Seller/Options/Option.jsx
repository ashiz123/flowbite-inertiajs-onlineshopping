import React, {useState, useRef} from 'react'
import { Button,  TextInput } from 'flowbite-react';

export default function Option() {

const[imagePreview,  setImagePreview] = useState([]);



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

    )
}
