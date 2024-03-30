import { usePage } from '@inertiajs/react';
import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Address from './Address';
import Payment from './Payment';

export default function PersonalInformation({formData, changeData}) {

    

    const {auth} = usePage().props;
    const dispatch = useDispatch();
    console.log(usePage().props);

    const firstname = auth.user.name.split(' ')[0]
    const lastname = auth.user.name.split(' ')[1];

    formData.firstname = firstname;
    formData.lastname = lastname;
    formData.email = auth.user.email;
    

    const [inputs, setInputs] = useState({
        'firstname' : firstname,
        'lastname' : lastname,
        'email' : auth.user.email,
        'phonenumber': ''
    })



    

    const addPersonal = () => ({
        type: 'ADD_PERSONAL_DETAILS',
        payload: inputs
      });


    


    // useEffect(()=> {
    //     dispatch(addPersonal());
       
    // }, [addPersonal.firstname])
 
   
    
    function verifyUser()
      {
        dispatch(addPersonal());
      }
    

    

function handleInputChange(e)
    {
        const {name, value} = e.target;
        setInputs((prevData) => ({...prevData, [name]: value}));
        changeData(e.target.name, e.target.value);
        // dispatch(addPersonal);
    }

   
  return (

    <>
    {
        console.log('return')
    }
     <h6 className="text-lg font-bold dark:text-white">YOUR DETAIL</h6><br />

  
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" name="firstname" value={formData.firstname} onChange = {handleInputChange} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter firstname" required />
            
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text"  name='lastname' value={formData.lastname} onChange = {handleInputChange} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter lastname" required />
        </div>
        
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="number" id="phone" name='phonenumber' value={formData.phonenumber} onChange = {handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
       
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" name='email' value={formData.email} onChange = {handleInputChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    
    {/* <button type="button" onClick={verifyUser} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Verify User</button> */}
    

    </>
  )
}
