import React, {useEffect, useState} from 'react'
import {useDispatch, connect } from 'react-redux';
import AddedPayment from './AddedPayment';





export default function Payment({formData, changeData, errors}) {
 const[paymentDetail, setPaymentDetail] = useState({
    'cardnumber': '',
    'expiry' : '',
    'cvc': ''
 })
 const [addPayment , setAddPayment] = useState(false);

 const dispatch = useDispatch();

 function addPaymentDetail()
 {
    return {
        type: 'ADD_PAYMENT_DETAIL',
        payload: paymentDetail
    }
 }


 
 
 function handleInputChange(e)
 {
    e.preventDefault();
    console.log(e.target.name);
    changeData(e.target.name, e.target.value);
 }

 function onHandleClickPayment(e)
 {
    //  e.preventDefault();
    //  dispatch(addPaymentDetail())
    //  setAddPayment(true);
    //  setPaymentDetail({
    //     'cardnumber': '',
    //     'expiry' : '',
    //     'cvc': ''
    //  })
 }
 
 return (
    <>
    {
        addPayment &&
        <>
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
         Payment added
        </div>

        <AddedPayment />
        </>
    }


     <h6 className="text-lg font-bold dark:text-white">PAYMENT</h6><br />
    
    <div className="grid gap-6 mb-6 md:grid-cols-3">
       

    <div>
        <label for="flatnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Card number</label>
        <input type="text" placeholder="Enter card number" name="cardnumber" value={formData.cardnumber } onChange = {handleInputChange} id="flat_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        {errors.cardnumber && <span style={{color:"red"}}>{errors.cardnumber}</span>}
    </div>
    <div>
        <label for="flatnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Expiry</label>
        <input type="date" placeholder="Enter card expiry" name="expiry" value={formData.expiry } onChange = {handleInputChange} id="flat_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        {errors.expiry && <span style={{color:"red"}}>{errors.expiry}</span>}
    </div>
    <div>
        <label for="postcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> CVC/CVV</label>
        <input type="text" id="cvc" name="cvc" value = {formData.cvc} onChange = {handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter CVC" required />
        {errors.cvc && <span style={{color:"red"}}>{errors.cvc}</span>}
    </div>  

    {/* <button type="button" onClick={onHandleClickPayment} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Payment</button> */}
   
</div>
</>
  )
}
