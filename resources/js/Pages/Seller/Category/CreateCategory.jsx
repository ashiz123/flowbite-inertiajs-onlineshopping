'use client';

import { useState } from 'react'

import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { router } from '@inertiajs/react';

import AppSidebar from '@/Layouts/AppSidebar';
import Navigation from '@/Layouts/Navigation';
import {Heading} from '@/Components/heading';

import { space } from 'postcss/lib/list';


export default function CreateCategory({categories}) {
  
const [values, setValues] = useState({
  'title' : '',
  'description': '',
  'publish' : true,
  'parent_id': '0'
});



//Text form
function handleChange(e)
{
  const key = e.target.name;
  const value = e.target.value
  setValues({...values, [key]: value});
 
}


//checkbox form
function onPublishChange()
{
  setValues(values => ({...values, publish : !values.publish}));
  console.log(values)
}


function handleSubmit(e)
{
  e.preventDefault();
  console.log(values);
  router.post('/category/store', values);
}




  return (
    <>
    <Navigation />
    <div className="flex">
      <AppSidebar />
    <div className=" flex-1 p-7">
      <Heading>Create Category</Heading>
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
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
          placeholder="Category title"
          required
          shadow
          type="text"
          value={values.title}
          name= "title"
          onChange={handleChange}
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
          placeholder="Category description"
          value={values.description}
          name='description'
          onChange={handleChange}
        />
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
          value="Select your country"
        />
      </div>
      <Select
        id="parent_id"
        name = 'parent_id'
        onChange={handleChange}
        required
      >
         <option value= "0">
              --No main category--
           </option>
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
        <Checkbox id="publish" name = "publish" type= "checkbox"  checked = {values.publish} onChange={onPublishChange}/>
        <Label htmlFor="publish">
          Publish
        </Label>
      </div>
        </div>
      </div>

      

      


      
      <Button type="submit">
        Create Category
      </Button>
    </form>
    </div>
    </div>
    </>
  )
}


