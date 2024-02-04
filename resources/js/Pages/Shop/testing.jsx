import React from 'react';


import { counterReducer } from '@/Redux/Reducers/CounterReducer';
import {  useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/Redux/Actions/Action';


export default function testing() {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    console.log(counter);

   


  return (
    <div className='flex justify-center mt-10'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())} >
  -
</button>
&nbsp;&nbsp;
       <span className='mt-2'> {counter}</span> 
        &nbsp;&nbsp;
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>
  +
</button>
         </div>
  )
}
