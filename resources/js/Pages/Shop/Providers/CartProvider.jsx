export const CartProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);
  
    const updateCartData = (newCartData) => {
      setCartData(newCartData);
    };
    

}