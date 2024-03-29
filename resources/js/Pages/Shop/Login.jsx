import React from 'react';
import Layout from './Layout/Layout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { loginFailure, loginSuccess } from '@/Redux/Actions/AuthAction';

import axios from 'axios';

import {  useDispatch, useSelector } from 'react-redux';


export default function Login() {

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
 });

  const dispatch = useDispatch(); //calling the action
  const auth = useSelector(state => state.auth); //data from state

function onInputChange(e)
{
  setData((prevData) => ({...prevData, [e.target.name]: e.target.value}));
}

const handleSubmit = async(e) => 
    {
      e.preventDefault();
      try{
         await post('/shop/login', data).then(function(){
          console.log('User logged in');
         })
         
        
      }
      catch(error)
      {
        console.error('Error fetching data:', error);
       }
    }



  return (
    <Layout>
     

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={(e) => handleSubmit(e)} >
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" >Email address</label>
        <div className="mt-2">
          <input id="email" name="email"  type="email" autoComplete="email" value={data.email} required onChange={(e) =>onInputChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" value={data.password} onChange={(e) =>onInputChange(e)} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href={route('shop.user.showRegister')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> New user</a>
    </p>
  </div>
</div>


    </Layout>
  )
}
