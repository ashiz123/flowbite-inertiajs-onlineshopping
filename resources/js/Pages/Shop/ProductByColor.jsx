import React, { useState } from 'react'
import { getColor } from './ProductOverviewFunction'
import axios from 'axios';

export default function ProductByColor({color, getSizesByColor, productId}) {

    const [sizes, setSizes] = useState({});


    console.log(productId);



    function getSizesOfColor(e)
    {
        e.preventDefault();
        const fetchSizes = async() => {
             try{
                const response = await axios.get(`/shop/product_id/${productId}/color/${color}`)
                if(response)
                {
                    getSizesByColor(response);
                }
             }

             catch(error){
                console.log(error);
             }
        }
        fetchSizes();
       
    }
    
  return (
    <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
    <input type="radio" name="color-choice" value= {color} class="sr-only" aria-labelledby="color-choice-0-label" onClick={getSizesOfColor}/>
    <span id="color-choice-0-label" class="sr-only">{color}</span>
    <span aria-hidden="true" className ={`h-8 w-8 ${color &&  getColor(color)} rounded-full border border-black border-opacity-10`} ></span>
  </label>
  )
}
