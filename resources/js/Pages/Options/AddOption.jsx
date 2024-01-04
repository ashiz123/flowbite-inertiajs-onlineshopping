import React, {useState} from 'react'
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

export default function AddOption() {

  const[input, setInput] = useState({
    'title' : '',
    'sku' : '',
    'size' : '',
    'color': '',
    'origin': '',
    'type' : ''
  })


  const divWidth300 = {
    width : '300px'
  };

  function handleInputChange(e)
  {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setInput({...input,[name] : value })
    console.log(input);
  } 

  return (
        <div class="flex flex-nowrap gap-3 m-5">
          <div style= {divWidth300}> <TextInput placeholder='Enter title' name='title' onChange={(e)=>handleInputChange(e)}></TextInput></div>
          <div> <TextInput placeholder='SKU' name='sku' onChange={(e)=>handleInputChange(e)}></TextInput></div>
          <div> <TextInput placeholder='Size' name='size' onChange={(e)=>handleInputChange(e)}></TextInput></div>
          <div> <TextInput placeholder='Color' name='color' onChange={(e)=>handleInputChange(e)}></TextInput></div>
          <div> <TextInput placeholder='Origin' name='origin' onChange={(e)=>handleInputChange(e)}></TextInput></div>
          <div> <TextInput placeholder='Type' name='type' onChange={(e)=>handleInputChange(e)}></TextInput></div>
        </div>
    
  )
}
