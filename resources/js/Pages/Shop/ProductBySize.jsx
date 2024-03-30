import React from 'react'

export default function ProductBySize({size, colorsBySize, productId}) {


    function getColorsBySize(e)
    {
        e.preventDefault();
        const fetchColors = async() => {
             try{
                const response = await axios.get(`/shop/product_id/${productId}/size/${size}`)
                if(response)
                {
                    colorsBySize(response);
                }
             }

             catch(error){
                console.log(error);
             }
        }
        fetchColors();
    }

    


  return (
    <label  class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
    <input type="radio" name="size-choice" value= {size} onClick={getColorsBySize} class="sr-only" aria-labelledby="size-choice-1-label" />
    <span id="size-choice-1-label">{size}</span>
    {/* <!--
      Active: "border", Not Active: "border-2"
      Checked: "border-indigo-500", Not Checked: "border-transparent"
    --> */}
    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
  </label>
  )
}
