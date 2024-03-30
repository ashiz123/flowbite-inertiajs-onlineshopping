import axios from 'axios'
import React, { useEffect, useState } from 'react'

export  function OrderProduct({detail}) {
   const [productDetail, setProductDetail] = useState()
  

 

    
    

    useEffect(()=> {
        const fetchData = async() => {
           try{
            console.log(detail.id);
            const response = await axios.get(`/orders/product/${detail.product_id}`)
            console.log(response)
            setProductDetail(response.data);
            }
           catch(error)
           {
             console.error(error); 
           }

        }
        fetchData();
    }, [detail.product_id])


  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="w-4 px-4 py-3">
                              <div className="flex items-center">
                                  <input id="checkbox-table-search-1" type="checkbox"  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                              </div>
                          </td>
                          <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                              {productDetail && productDetail.title}
                          </th>
                          <td className="px-4 py-2">
                              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{productDetail && productDetail.category.title}</span>
                          </td>

                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{'no variant'}</td>
                          
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center">
                                 {detail.order_quantity}
                              </div>
                          </td>
                          
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{productDetail && productDetail.minimum_price}</td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{productDetail && productDetail.minimum_price * detail.order_quantity}</td>
                          
                          
                      </tr>
  )
}
