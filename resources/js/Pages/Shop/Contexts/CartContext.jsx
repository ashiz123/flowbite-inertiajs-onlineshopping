
import React, { createContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {

 const [cartItems, setCartItems] = useState([]);



  const addToCart = (data) => {
     setCartItems(data);
   };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;