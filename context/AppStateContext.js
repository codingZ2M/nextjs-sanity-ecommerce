import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const addProduct = (product, quantity) => {
        const existingCartProduct = cartItems.find((item) => item._id === product._id);
      
        if (existingCartProduct) {            
           setCartItems(cartItems.map((item) => item._id === product._id ? 
            {...existingCartProduct, quantity: existingCartProduct.quantity + quantity } : item)
           );
        }
        else {
            setCartItems([...cartItems, {...product, quantity:product.quantity + quantity }]);
        }
        setTotalPrice( (prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        toast.success(`${qty} ${product.name} added to the cart.`);
    }


    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }


    const decQty = () => {
        setQty((prevQty) => {
           if( prevQty - 1 < 1 ) return 1;
           return prevQty - 1;
        });
    }


    const toggleCartItemQuantity = (productId, value) => {
        foundProduct = cartItems.find((item) => item._id === productId);
        const newCartItems = cartItems.filter((item)=> item._id !== productId);

        if(value === "increment") {   
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice( (prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
         }
          else if(value === "decrement"){
          if( foundProduct.quantity > 1){
             setCartItems([...newCartItems, {...foundProduct, quantity:foundProduct.quantity - 1 }]); 
             setTotalPrice( (prevTotalPrice) => prevTotalPrice - foundProduct.price);
             setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
           }
          }
      }

const removeCartItem = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item)=> item._id !== product._id);
    setTotalPrice( (prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
}

    return (
        <context.Provider 
                value= { {
                    showCart,
                    setShowCart,
                    cartItems,
                    totalPrice,
                    totalQuantities,
                    qty,
                    addProduct,
                    incQty,
                    decQty,
                    toggleCartItemQuantity,
                    removeCartItem,
                } }
        >
            {children}
        </context.Provider>
    )

}
 
export const useStateContext = () => useContext(context);