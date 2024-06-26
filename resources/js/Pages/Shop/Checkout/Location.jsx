import React, {useEffect, useState, useRef} from 'react'
import { usePage } from '@inertiajs/react';
import { dummyData } from './dummyData';

export  function Location({formData, changeData, selectOption, errors}) {


    const { address_api, user_address } = usePage().props;
    const [address, setAddress] = useState(" ");
    const [suggestions, setSuggestions] = useState(null);
   

   


    //while entering first line of address
    function handleAddressChange(e)
    {
        setAddress(e.target.value);
    }



    //onKeyDown 
    const handleKeyDown = async(e) =>
    {
      
        if (e.key === 'Enter') {
            e.preventDefault();
            await axios.get(`https://api.getAddress.io/autocomplete/{${e.target.value}}?api-key=${address_api}`).then(function(response) {
            setSuggestions(response.data.suggestions);
        })
          }

          
    }


    //sending data to parent component
    function handleInputChange(e)
    {
        e.preventDefault();
        changeData(e.target.name, e.target.value)


    }


    //sending data to parent component
   function onSelectedSuggestion(e)
   {
      const {value} =  e.target
      selectOption(value);
   }

    

   function onAddAddressClick()
    {
        // to get previous address
        console.log('address click');
    }



  return (
    <>
    <h6 class="text-lg font-bold dark:text-white">Add new address</h6><br />

            <div className='col-span-2'>
             <label for="street-address" class=" text-sm font-medium leading-6 text-gray-900">
                 <b>Enter address automatically</b>
               <input 
                    type="text" 
                    name = 'firstaddress'
                    value= {address} 
                    className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onChange = {handleAddressChange} 
                    onKeyDown = {handleKeyDown}
                    placeholder="Type first line of address and press enter"
                  />
                </label>
                
                <br />

                <label className=" text-sm font-medium leading-6 text-gray-900">
                  Select
                  <select name="first_line_of_address"  onChange={onSelectedSuggestion}  className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                   {
                      suggestions === null || suggestions.length === 0   ?
                      <option  value="">Enter first line of address</option> 
                      :
                      suggestions.map((suggest, id) => {
                        return(
                          <option  value={suggest.id} key ={id} > {suggest.address} </option>
                      )
                    })
                  }
                    </select>
                </label>
                


              </div>

              <br/>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label for="housenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House number</label>
          <input type="text" placeholder="Enter house number"  name='housenumber' value = {formData.housenumber} onChange = {handleInputChange} id="house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          {errors.housenumber && <span style={{color:"red"}}>{errors.housenumber}</span>}
        </div>
        <div>
            <label for="flatnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Flat number</label>
            <input type="text" placeholder="Enter flat number"  name="flatnumber" value={formData.flatnumber } onChange = {handleInputChange} id="flat_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            {errors.flatnumber && <span style={{color:"red"}}>{errors.flatnumber}</span>}
        </div>
        <div>
            <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post code</label>
            <input type="text" id="post_code"   value = {formData.postcode}  onChange = {handleInputChange}  name='postcode' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter postcode" required />
            {errors.postcode && <span style={{color:"red"}}>{errors.postcode}</span>}
        </div>  
        <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input type="text" id="phone" name='city'  value={formData.city}  onChange = {handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            {errors.city && <span style={{color:"red"}}>{errors.city}</span>}
        </div>
        <div>
            <label for="reigion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">County</label>
            <input type="text"  id="reigion" name='reigion' value={formData.reigion}  onChange = {handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter County" required />
            {errors.reigion && <span style={{color:"red"}}>{errors.reigion}</span>}
        </div>
        <div>
            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input type="text" name="country" value={formData.country}  onChange = {handleInputChange}  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Country" required />
            {errors.country && <span style={{color:"red"}}>{errors.country}</span>}
        </div>

        {/* <button type="button" onClick= {onAddAddressClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Address</button> */}
    </div>
    </>
  )
}
