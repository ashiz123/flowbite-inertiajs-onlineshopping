'use client';
import React, {useState} from 'react';
import { Button,  Modal, Checkbox, Label, TextInput , Select } from 'flowbite-react'
import { router } from '@inertiajs/react'
import {Heading} from '@/Components/Heading';


export default function EditCategory({category, setOpenModal, openModal, categories}) {
   


 const[newValues, setNewValues] = useState({
  'id' : category.id,
  'title' : category.title,
  'description' : category.description,
  'publish' : category.publish,
  'parent_id': category.parent_id
 })


 console.log(newValues.publish);
 
  
//Text form
function handleChange(e)
{
  const key = e.target.name;
  const value = e.target.value
  setNewValues((prevState) => ({
    ...prevState, [key]: value
  }))
  
}




//checkbox form
function onPublishChange()
{
  setNewValues(newValues => ({...newValues, publish : !newValues.publish}));
}


function handleUpdate(e)
{
  e.preventDefault();
  router.patch(`/category/update/${category.id}`,newValues);
  setOpenModal();
}



  return (
    <>
      <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
      <Modal.Header>Edit</Modal.Header>
      <Modal.Body>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleUpdate}>
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
        value={newValues.title}
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
        value={newValues.description}
        name='description'
        onChange={handleChange}
      />
    </div>

    <div className='flex flex-row pt-5'>
        <div className="basis-1/2">
        <div  className="max-w-md" id="select" >
      
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your country" />
      </div>

      <Select
        id="parent_id"
        name = 'parent_id'
        onChange={handleChange}
        value={newValues.parent_id}
        required
      >
         <option value= "0">
              --No main category--
           </option>
        {
          categories
           .map((cat, i) => {
            if(cat.id !== category.id) {
              return(
                <option key={i} value= {cat.id} >
                  {cat.title}
               </option>
               )
            }
           
          })
        }
      </Select>
    </div>

        </div>
        <div className="basis-1/2 pl-10 pt-10">
        <div className="flex items-center gap-2 ">
        <Checkbox id="publish" name = "publish" type= "checkbox"  checked = {newValues.publish} onChange={onPublishChange}/>
        <Label htmlFor="publish">
          Publish
        </Label>
      </div>
        </div>
      </div>

    <Button type="submit">
      Update Category
    </Button>
  </form>
      
      </Modal.Body>
     
    </Modal> 
    
       
    </>
  )
}



