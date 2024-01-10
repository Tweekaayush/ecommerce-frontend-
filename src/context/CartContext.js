import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

const localCart = JSON.parse(localStorage.getItem('cart'))

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState( localCart || {
        totalProducts: 0,
        totalPrice: 0,
        cartItems: []
    })

    const addToCart = (product) =>{
        let cartLength = cart.totalProducts
        let newArr = [...cart.cartItems]
        let foundIndex = newArr.findIndex(x => x.id === product.id);

        if(foundIndex !== -1){
            newArr[foundIndex].quantity += product.quantity;
        }
        else {
            cartLength += 1
            newArr = [...newArr, product]
        }

        const item = {
            totalProducts: cartLength,
            totalPrice: cart.totalPrice + product.price,
            cartItems: newArr
        }
        setCart(item)
    }

    const removeFromCart = (id) =>{
        let cartLength = cart.totalProducts
        let newArr = [...cart.cartItems]
        let foundIndex = newArr.findIndex(x => x.id === id);

        if(foundIndex !== -1){
            // if(newArr[foundIndex].quantity > 1)
            //     newArr[foundIndex].quantity -= 1;
            // else{
            //     cartLength -= 1
            // }
            newArr = newArr.filter((item) => item.id !== id)
            
            const item = {
                totalProducts: cartLength-1,
                totalPrice: cart.totalPrice - cart.cartItems[foundIndex].price,
                cartItems: newArr
            }
            setCart(item)
        }
    }

    const value = {
        totalProducts: cart.totalProducts,
        totalPrice: cart.totalPrice,
        cartItems: cart.cartItems,
        addToCart,
        removeFromCart
    }

    useEffect(() => {
        const json = localStorage.getItem("cart");
        const savedCart = JSON.parse(json);
        if (savedCart) {
          setCart(savedCart);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
}