import React, { useEffect,createContext, useState } from 'react'
import { usePage } from '@inertiajs/react';
import { useDispatch, connect } from 'react-redux';
import axios from 'axios';
import { dummyData } from '../dummyData';
import AddedAddress from '../AddedAddress';
import { addAddress, addPreviousAdress } from '@/Redux/Actions/AddressAction';



export const MyContext = createContext();


const initialAddressState = {
  'firstaddress' : '' ,
  'housenumber' : '',
  'flatnumber': '',
   'city' : '',
  'reigion' : '',
  'postcode' : '',
  'country': ''
  }


 function Address({changeData, formData}) {

    

    const { address_api, user_address } = usePage().props;

    const [suggestions, setSuggestions] = useState(null);
    const [selectedSuggest, setSelectedSuggest] = useState('');
    const [addressAdd, setAddressAdd] = useState(false);
    const [getInput, setGetInput] = useState(initialAddressState)
    const dispatch = useDispatch();

     


useEffect(() => {
if(user_address)
{
  dispatch(addPreviousAdress(user_address));
}

 if(selectedSuggest)
    {

      const fetchAddress = async() => {
        try{
          await axios.get(`https://api.getAddress.io/get/${selectedSuggest}?api-key=${address_api}`).then(function(response) {
          const addressInfo = response.data;
          setGetInput({...getInput, ['city'] : addressInfo.town_or_city,  ['reigion'] : addressInfo.county, ['postcode'] : addressInfo.postcode , ['housenumber'] : addressInfo.line_1, ['flatnumber'] : addressInfo.line_2, ['country']: addressInfo.country, ['building']: addressInfo.building_number});
          
         
        })
        }
        catch(error)
        {
          console.error('error fetching data', error)
        }
        
      }

      const addressInfo = dummyData;
      setGetInput({...getInput, ['city'] : addressInfo.town_or_city,  ['reigion'] : addressInfo.county, ['postcode'] : addressInfo.postcode , ['housenumber'] : addressInfo.line_1, ['flatnumber'] : addressInfo.line_2, ['country']: addressInfo.country, ['building']: addressInfo.building_number});
      
      // fetchAddress();
      console.log('tsting');
      
    }
    }, [selectedSuggest])

   


    
   function handleInputChange(e){
      const name = e.target.name;
      const value = e.target.value;
      setGetInput({...getInput, [name]: value})
      changeData(e.target.name, e.target.value);
    }
    
    // show suggestion after enter key press
    const onFindAddress = async(e) =>
    {
      if (e.key === 'Enter') {
        e.preventDefault();
      
        await axios.get(`https://api.getAddress.io/autocomplete/{${e.target.value}}?api-key=${address_api}`).then(function(response) {
        setSuggestions(response.data.suggestions);
       })
      }
    }



    function selectedSuggestion(e)
    {
      setSelectedSuggest(e.target.value);
    }



     const onAddAddressClick = async(e) =>
    {
      await axios.post('/shop/checkout/add/address', getInput)
      .then(response => {
        console.log(response)
        dispatch(addAddress(getInput))
        setAddressAdd(true);
        setGetInput(initialAddressState)
      })

      .catch(error => {
        // Handle error
        console.error('Error creating resource:', error);
      });
      
      
    }


   

 return (
    <>
    {
      user_address &&
      <>
      {/* <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        Address added successfully
      </div> */}
       <AddedAddress/>
      </>
    }
    <h6 class="text-lg font-bold dark:text-white">Add new address</h6><br />

            <div className='col-span-2'>
             <label for="street-address" class=" text-sm font-medium leading-6 text-gray-900">
                 <b>Enter address automatically</b>
               <input 
                    type="text" 
                    name = 'firstaddress'
                    value={getInput.firstaddress} 
                    className='w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onChange = {handleInputChange} 
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
                      <option  value="">Enter first line of address</option> 
                      :
                      suggestions.map((suggest, id) => {
                        return(
                          <option  value={suggest.id} key ={id} >{suggest.address}</option>
                      )
                    })
                  }
                    </select>
                </label>


              </div>
          
     <br />
    <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label for="housenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House number</label>
          <input type="text" placeholder="Enter house number" ref={housenumber} name='housenumber'value = {formData.housenumber} onChange = {handleInputChange} id="house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
            {/* {getInput.housenumber && `${getInput.building}, ${getInput.housenumber}`}  */}
        </div>
        <div>
            <label for="flatnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Flat number</label>
            <input type="text" placeholder="Enter flat number" ref={flatnumber} name="flatnumber" value={formData.flatnumber } onChange = {handleInputChange} id="flat_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
            <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post code</label>
            <input type="text" id="post_code" ref={postcode}  value = {formData.postcode}  onChange = {handleInputChange}  name='postcode' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter postcode" required />
        </div>  
        <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input type="text" id="phone" name='city' ref={city} value={formData.city}  onChange = {handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="reigion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">County</label>
            <input type="text"  id="reigion" name='reigion' ref={reigion} value={formData.reigion}  onChange = {handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter County" required />
        </div>
        <div>
            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input type="text" name="country" value={formData.country} ref={country} onChange = {handleInputChange}  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Country" required />
        </div>

        <button type="button" onClick= {onAddAddressClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Address</button>
    </div>
    </>
  )
}


export default Address