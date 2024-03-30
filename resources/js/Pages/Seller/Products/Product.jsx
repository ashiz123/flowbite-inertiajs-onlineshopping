import React, {useState, useEffect} from 'react'
import { Table, Modal, Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { router } from '@inertiajs/react';


import ShowProduct from './ShowProduct';
import axios from 'axios';


export default function Product({product, products, categories}) {

  const [openModal, setOpenModal] = useState(false);
  const [parent, setParent] = useState('');


  useEffect(()=> {

    const fetchParent = async() =>
    {
      await axios.get(`/category/parent/${product.category.parent_id}`)
      .then(response => {
        console.log(response);
        setParent(response.data);
      })

      .catch(error => {
        console.error(error);
      })
    }

        fetchParent();

  }, [product.parent_id]);




  function openModalTrue()
  {
    console.log(product);
    setOpenModal('true');
  }

  function editProduct(id)
  {
    console.log(id);
    router.get('/product/show/' + id);
  }
 

  return (
    <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {products.indexOf(product) + 1}
          </Table.Cell>
          <Table.Cell>
          {product.title}
          </Table.Cell>
          <Table.Cell>
                  {parent ? parent :
                    <span style = {{ color:"red" }}>No parent</span>
                  }
          </Table.Cell>
          <Table.Cell>
          {product.category.title}
          </Table.Cell>
          <Table.Cell>
          {product.variant=== 1 ? <span className='text-green-700'>Variant</span> : <span className='text-red-700'> No variant </span>}
          </Table.Cell>
          <Table.Cell>
          {/* <Button  className='bg-blue-700' onClick={openModalTrue}>View & Modify</Button> */}
          <Button  className='bg-blue-700' onClick={() => editProduct(product.id)}>View</Button>
        
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>{product.title}</Modal.Header>
            <Modal.Body>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Product Title" />
                </div>
                <TextInput  type="text" placeholder="product name" value={product.title} required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Product description" />
                </div>
                <TextInput type="text" placeholder="Product description" value={product.description} sizing="lg" required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Product Name" value="Product category" />
                </div>
                <Select id="countries" value={product.category.title} required>
                {
                  categories.map((category, id) => {
                    return(
                      <option key= {id}>{category.title}</option>
                    )
                  })
                }
                </Select>
              </div>

              <div>

              </div>

             <div className="flex items-center gap-2">
                <Checkbox id="variant"  name="variant" checked = {product.variant}/>
                <Label htmlFor="variant">Variant</Label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
            </Modal.Body>
          
      </Modal>

          </Table.Cell>
          </Table.Row>
          </>

  )
}
