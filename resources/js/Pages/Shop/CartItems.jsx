import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'
import CartItem from './CartItem';

export default function CartItems() {

    const { carts } = usePage().props;
    const[updatedCarts, setUpdatedCarts] = useState(carts)
    

   

    useEffect(() => {
        console.log(updatedCarts)
      getCartItems()
      }, [carts])
     
     
      const getCartItems = async()  =>
      {
        try{
          await axios.get('/shop/get-cart-items')
          .then(response => {
            console.log(response);
            setUpdatedCarts(response.data);
          })
         .catch(error => console.error(error))
        }
    
        catch(error){
          console.error(error)
        }
       
      }

    function removeItemFromCart(cartsData)
    {
        setUpdatedCarts(cartsData);
    }

    function incrementItemInCart(cartsData)
    {
      setUpdatedCarts(cartsData);
    }

    function decrementItemInCart(cartsData)
    {
      setUpdatedCarts(cartsData);
    }


  return (
    <>
    {
        updatedCarts.map((item, i) => {
           // const imagePath = '/storage/' + item.image
           return(
             <CartItem key={i} item = {item} removeItemFromCart ={removeItemFromCart} incrementItemInCart = {incrementItemInCart} decrementItemInCart = {decrementItemInCart}/>
           )
         })
        
       }
       </>
  )
}
