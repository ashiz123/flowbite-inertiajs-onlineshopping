import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/react';
import axios from 'axios';

export default function UserInfo() {

    const { auth, address_api } = usePage().props;
    const [firstAddress, setFirstAddress] = useState('')

    const firstname = auth.user.name.split(' ')[0]
    const lastname = auth.user.name.split(' ')[1];
    const [addressId, setAddressId] = useState(null)
    const [suggestions, setSuggestions] = useState(null);
    const [selectedSuggest, setSelectedSuggest] = useState('');
    const [getInput, setGetInput] = useState({
      'firstaddress' : '',
      'secondaddress': '',
      'city' : '',
      'reigion' : '',
      'postcode' : '',
      'housenumber': '',
      'flatnumber': ''
     })

    // const [city, setCity] = useState('');
    // const [state, setState]  = useState('');
    // const [postcode, setPostcode] = useState('');


    




    // const postcode_lookup = `https://api.getAddress.io/get/${addressId}?api-key=${address_api}`

   
   useEffect(() => {
    if(selectedSuggest)
    {
      const fetchAddress = async() => {
        try{
          await axios.get(`https://api.getAddress.io/get/${selectedSuggest}?api-key=${address_api}`).then(function(response) {
          const addressInfo = response.data;
          setGetInput({...getInput, ['city'] : addressInfo.town_or_city,  ['reigion'] : addressInfo.county, ['postcode'] : addressInfo.postcode , ['housenumber'] : addressInfo.line_1, ['flatnumber'] : addressInfo.line_2});
        })
        }
        catch(error)
        {
          console.error('error fetching data', error)
        }
        
      }

      // fetchAddress();
      console.log(selectedSuggest);
      
     
      
    }
    }, [selectedSuggest])

   

    
   
 

    console.log(suggestions);


    function onChangeInput(e){
      const name = e.target.name;
      const value = e.target.value;
      setGetInput({...getInput, [name]: value})
    }
    

    const onFindAddress = async(e) =>
    {
      
      console.log('enter clicked')
    
      if (e.key === 'Enter') {
        e.preventDefault();
      // setFirstAddress(e.target.value);
        await axios.get(`https://api.getAddress.io/autocomplete/{${e.target.value}}?api-key=${address_api}`).then(function(response) {
        console.log(response.data.suggestions[0]);
        setSuggestions(response.data.suggestions);
        // setAddressId(response.data.suggestions[0].id);
        setSelectedSuggest(response.data.suggestions[0].id);
        })
      }
    }

    


   

    function selectedSuggestion(e)
    {
      setSelectedSuggest(e.target.value);
    }

    console.log(getInput);
   

    
    


  return (
    <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Address Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* <div >
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" disabled value={firstname} name="first-name" id="first-name" autoComplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" disabled value={lastname} name="last-name" id="last-name" autoComplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" disabled name="email" value={auth.user.email} type="email" autoComplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          </div> */}
          
  
        
         {/* <div style={{ margin:"30%" }}></div> */}
  
        

          <div className='col-span-2'>
                    <div>
                <label for="street-address" class=" text-sm font-medium leading-6 text-gray-900">
                  Find the address
                  <input 
                    type="text" 
                    name = 'firstaddress'
                    value={getInput.firstaddress} 
                    className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onChange = {onChangeInput} 
                    onKeyDown = {onFindAddress}
                    placeholder="Type first line of address and press enter"
                  />
                </label>
                <br />
                <label className=" text-sm font-medium leading-6 text-gray-900">
                  Select
                  <select name="first_line_of_address" onChange={(e) =>selectedSuggestion(e)} value = {selectedSuggest} className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                   {
                      suggestions === null || suggestions.length === 0   ?
                      <option value="">Enter first line of address</option> 
                      :
                      suggestions.map((suggest, id) => {
                        return(
                          <option value={suggest.id} key ={id} >{suggest.address}</option>
                      )
                    })
                  }
                    </select>
                </label>
              </div>
          </div>

          

          <div class="col-span-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Second line of address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autoComplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="col-span-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">House number</label>
            <div class="mt-2">
              <input type="text" name="street-address" value={getInput.line_2} onChange ={onChangeInput} id="street-address" autoComplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" value = {getInput.city} onChange={onChangeInput} autoComplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="reigion" id="region" value={getInput.reigion} onChange = {onChangeInput} autoComplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postcode" value={getInput.postcode} onChange = {onChangeInput}  id="postal-code" autoComplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>
  )
}
