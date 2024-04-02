import React, { useState } from 'react';
import { Table } from 'flowbite-react';

export default function StockProduct(stock) {

  const[productName, setProductName] = useState(null);



  // To get the product from variant(@productFromVariant)
   function getProductTitle(variantId)
   {
     const fetchProductByVariant = async() =>
    {
        await axios.get(`/option/${variantId}/product`)
        .then(response =>
          {
            setProductName(response.data.product.title);
          })
        .catch(error => {
          console.error('Error fetching data:', error);
         });
    }
    
        fetchProductByVariant();
        return productName;
   }

   


    
   


  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    {
        stock.stock.stockable_type === "App\\Models\\Product"
        ? stock.stock.stockable.title :  getProductTitle(stock.stock.stockable.id)
        
    }
    </Table.Cell>
    {/* <Table.Cell>{product.product.variant ? <span className='text-green-600' >Variant</span> :  <span className='text-red-600' >No Variant</span>} </Table.Cell> */}
    {/* <Table.Cell>{stock.stock.id}</Table.Cell> */}
    <Table.Cell>
     {  
       stock.stock.stockable_type === "App\\Models\\Variant"
       ? stock.stock.stockable.title : <span className='text-blue-600'>No variant</span>
     }
    </Table.Cell>
    <Table.Cell>{stock.stock.quantity}</Table.Cell>
    <Table.Cell>
      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Edit
      </a>
    </Table.Cell>
  </Table.Row>
   
  )
}
