import React, {useState} from 'react'
import { Table, Button, Modal, Checkbox, Label, TextInput  } from 'flowbite-react'
import EditCategory from './EditCategory';

export default function Category({category, categories, deleteCategory}) {
  const [openModal, setOpenModal] = useState();
  const[popUp, setPopUp] = useState(false);
  const props = { openModal, setOpenModal };


  


   function onDeleteCategory()
  {
     deleteCategory(category.id);
     setPopUp(false);
  }



  return (
    <>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {categories.indexOf(category) + 1}
          </Table.Cell>
          <Table.Cell>
          {category.title}
          </Table.Cell>
          <Table.Cell>
          {category.description}
          </Table.Cell>
          <Table.Cell>
          {category.publish=== 1 ? <span className='text-green-700'>Publish</span> : <span className='text-red-700'> Withhold </span>}
          </Table.Cell>
          <Table.Cell>
           
              {/* <Button onClick={() => props.setOpenModal('default')} className='bg-blue-700'>Edit</Button>
              {
                props.openModal == 'default' ?
                <EditCategory setOpenModal={props.setOpenModal}  openModal=  {props.openModal} category = {category} categories={categories}/> : ''
              }

               <Button onClick={onDelete} className='bg-red-700'>Delete</Button>
                  */}



                  <div className='flex '>
                    <div className='mr-2'>
                    <Button onClick={() => props.setOpenModal('default')} className='bg-blue-700 '>Edit</Button>
                      {
                        props.openModal == 'default' ?
                        <EditCategory setOpenModal={props.setOpenModal}  openModal=  {props.openModal} category = {category} categories={categories}/> : ''
                      }
                    </div>

                    <div > 
                    <Button onClick={() => setPopUp(true)} className='bg-red-700'>Delete</Button></div>
                     <Modal show={popUp} onClose={() => setPopUp(false)}>
                      <Modal.Body>
                        <div className="space-y-6">
                        Do you want to delete this category?
                        </div>
                        <div className="flex mt-3 ">
                          <div>
                          <Button  className='bg-green-700 mr-2' onClick={onDeleteCategory}>Yes</Button>
                          </div>
                          <div>
                          <Button className='bg-red-700' onClick={() => setPopUp(false)}>No</Button>
                          </div>
                        </div>
                      </Modal.Body>
                   </Modal>
                  </div>
              
              
             
          </Table.Cell>
          </Table.Row>
           
          </>
  )
}
