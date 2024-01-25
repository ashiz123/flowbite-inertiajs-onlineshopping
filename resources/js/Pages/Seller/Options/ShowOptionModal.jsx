import React, { useState, useEffect } from 'react'
import {Modal, Button, Card } from 'flowbite-react';


export default function ShowOptionModal({openModal, variant, product, parentCallback}) {

  const [loading, setLoading] = useState(true);
  const [ data, setData ] = useState({});


  const headers = {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your_token',
    'Accept': 'application/json',
  };


    useEffect(() => {
     const fetchData = async() => {
      try{
        setLoading(true);
        const response =  await fetch('/api/option/' + variant.id, {
          method: 'GET',
          headers: headers,
        });
        
        const result =  await response.json();
        setData(result.variant.photo.path)
        
      }
      catch (error){
        console.error('Error fetching data:', error.message);
      }
     }

     fetchData();
    }, [variant])


    console.log(data);

    function controlModal(e)
    {
        e.preventDefault();
        parentCallback(false)
    }

    const photoPath = '/storage/' + data ;

    
    
    
  return (
    <Modal show={openModal} onClose={controlModal}>
    <Modal.Header>{product.title}</Modal.Header>
    <Modal.Body>
      
        
        <div className="space-y-6 flex">
  
  <div className="flex-auto w-64">
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Variant:  <strong>{variant.title}</strong>
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Size: {variant.size}
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Color: {variant.color}
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Type: {variant.type}
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Origin: {variant.origin}
        </p>
  </div>
  <div className="flex-auto w-32">
      <img src= {photoPath} />
  </div>
</div>
    
      
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={controlModal} disabled>Update</Button>
      <Button color="gray" onClick={controlModal}>
        Cancel
      </Button>
    </Modal.Footer>
    </Modal>
  )
}
