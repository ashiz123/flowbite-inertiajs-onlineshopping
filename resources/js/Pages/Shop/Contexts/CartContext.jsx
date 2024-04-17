
import React, { createContext, useState } from 'react';



const CartContext = createContext();


export const CartProvider = ({ children }) => {
 

 const [cartItems, setCartItems] = useState([]);
 const [updateStatus, setUpdateStatus] = useState(false);
 

  const updateToCart = (data) => {
    setCartItems(data);
    setUpdateStatus(true);
   };

  

  return (
    <CartContext.Provider value={{ cartItems, updateToCart, updateStatus }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;