
import React, { createContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {

 const [cartItems, setCartItems] = useState([]);



  const updateToCart = (data) => {
     setCartItems(data);
   };

  

  return (
    <CartContext.Provider value={{ cartItems, updateToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;