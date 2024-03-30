
'use client';

import React, {useEffect, useState} from 'react'
import { Accordion } from 'flowbite-react';
import Payment from './Payment';
import {Location} from './Location';
import PersonalInformation from './PersonalInformation';
import { connect} from 'react-redux';
import axios from 'axios';
import { router } from '@inertiajs/react'
import { useDispatch } from 'react-redux';
import { InitialCheckoutForm } from './InitialCheckoutForm';
import { usePage } from '@inertiajs/react';
import { dummyData } from './dummyData';
import {ValidateCheckout, ValidateOnChangeInputCheckout} from './CheckoutValidate';







function InformationContainer({checkoutFailed}) {

const [formData, setFormData] = useState(InitialCheckoutForm)
const { address_api } = usePage().props;
const [errors, setErrors] = useState({});



function onChangeInput(fieldName, value)
{
 
 const error = ValidateOnChangeInputCheckout(fieldName, value);

  setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error
    }));

 setFormData({...formData, [fieldName]: value})

}




//to fetch address in input by selecting the option
const fetchAddress = async(selectedSuggestId) => {
  try{
    await axios.get(`https://api.getAddress.io/get/${selectedSuggestId}?api-key=${address_api}`).then(function(response) {
    const addressInfo = response.data;
     setFormData({...formData, ['city'] : addressInfo.town_or_city,  ['reigion'] : addressInfo.county, ['postcode'] : addressInfo.postcode , ['housenumber'] : addressInfo.line_1, ['flatnumber'] : addressInfo.line_2, ['country']: addressInfo.country})
    })
  }

  catch(error)
  {
    console.error('error fetching data', error)
  }
  
}



function onSelectedAddress(selectedSuggestId)
{
  console.log(selectedSuggestId);
  const addressInfo =  fetchAddress(selectedSuggestId);
  // setFormData({...formData, ['city'] : addressInfo.town_or_city,  ['reigion'] : addressInfo.county, ['postcode'] : addressInfo.postcode , ['housenumber'] : addressInfo.line_1, ['flatnumber'] : addressInfo.line_2, ['country']: addressInfo.country})
}







  const checkout = async() => {
    try {
      //CheckoutController
      const response = await axios.post('/shop/checkout/process',  {formData})
      console.log(response);
      router.visit(response.data.redirect_to);
    }
    catch(error){
      console.error(error);
      
    }
  }


  function validation(checkout) {
    const err = ValidateCheckout(checkout);
    
    if(Object.keys(err).length === 0)
    {
      setErrors({});
      return true;
       
    }
    else{
       setErrors(err);
    }
  }


  function onSubmitCheckout(e)
  {
    e.preventDefault();
   
    
    if(validation(formData))
    {
     checkout()
    }
    else{
      console.log('failed');
      checkoutFailed();
    }

  }
  
 


  return (
    <form>
      {/* flowbite builtin accordion */}
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>PERSONAL INFORMATION</Accordion.Title>
        <Accordion.Content>
          <PersonalInformation formData = {formData} changeData = {onChangeInput} errors = {errors}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>ADDRESS</Accordion.Title>
        <Accordion.Content>
          <Location formData = {formData} changeData = {onChangeInput} selectOption = {onSelectedAddress}  errors ={errors}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>PAYMENT</Accordion.Title>
        <Accordion.Content>
         <Payment formData = {formData} changeData = {onChangeInput} errors = {errors}/>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>


<br />
<div class="flex items-start mb-6">
<div class="flex items-center h-5">
<input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
</div>
<label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
</div>
<button type="submit" onClick={onSubmitCheckout} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
</form>
  );
}

export default InformationContainer;
