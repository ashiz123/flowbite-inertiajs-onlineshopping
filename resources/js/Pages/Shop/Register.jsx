import React, { useEffect } from 'react'
import Layout from './Layout/Layout'
import { router } from '@inertiajs/react';
import {User} from './Constant/User';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import axios from 'axios';
import { checkUserLoggedIn } from '@/Functions/LoggedInUser';

import {  useDispatch, useSelector } from 'react-redux';
import { registerSuccess, registerFailure } from '@/Redux/Actions/AuthAction';
import store from '@/Redux/Store';

export default function Register() {



  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    type: 'customer'
  });
 
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  
  checkUserLoggedIn(dispatch)

//  useEffect(() => {
//   return () => {
//       reset('password', 'password_confirmation');
//   };
//  }, []);


   //calling the action
   //data from state

//   const listener = () => {
//     console.log('Store state updated:', store.getState());
//     // Perform UI updates or side effects based on the new state
// };

// // Subscribe the listener to the store
//  const unsubscribe = store.subscribe(listener);
  
//   unsubscribe();
  
  
    function handleInput(e)
    {
      e.preventDefault();
      setData((previousData) => ({...previousData, [e.target.name] : e.target.value}))
    }


    const handleSubmit = async(e) => 
    {
      e.preventDefault();
      console.log(data);
      try{
        await post('/shop/register', data);
      }
      catch(error)
      {
        console.error(error);
      }
       
    }

   
 

    
  return (
    
    <Layout>
     
    <div className="flex justify-center">
      <div>
         <form className="mb-8 p-5 w-500" onSubmit={(e) => handleSubmit(e)}>
            <center><h2 className="text-2xl font-semibold mb-4">Register</h2></center>
        
        <div className="mb-4">
            <InputLabel htmlFor="name" className="block text-sm font-medium text-gray-600" value="Name" />
            <TextInput type="text" id="name" name="name" value = {data.name} className="mt-1 p-2 w-full border rounded-md" onChange={(e) =>handleInput(e)}/>
        </div>
        <div className="mb-4">
            <InputLabel htmlFor="email" className="block text-sm font-medium text-gray-600" value="Email" />
            <TextInput type="email" id="email" name="email"  value = {data.email} className="mt-1 p-2 w-full border rounded-md" onChange={handleInput}/>
        </div>

       

        <div className="mb-4">
            <InputLabel htmlFor="password" className="block text-sm font-medium text-gray-600"  value= "Password" />
            <TextInput type="password" id="password" name="password" value = {data.password} className="mt-1 p-2 w-full border rounded-md" onChange={handleInput}/>
            <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mb-4">
            <InputLabel htmlFor="password" className="block text-sm font-medium text-gray-600" value= "Confirm Password" />
            <TextInput type="password" id="password_confirmation" name="password_confirmation" value = {data.password_confirmation} className="mt-1 p-2 w-full border rounded-md" onChange={handleInput}/>
            <InputError message={errors.password_confirmation} className="mt-2" />
        </div>
        <div className="text-center">
        <PrimaryButton className="ml-4 " disabled={processing} type="submit">
            Register
        </PrimaryButton>
        </div>
     
        
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
      Already a user? 
      <a href={route('shop.user.showLogin')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</a>
    </p>
      </div>
   </div>
   

</Layout>
  )
}
