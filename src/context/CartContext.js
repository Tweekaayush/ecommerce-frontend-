import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

const localCart = JSON.parse(localStorage.getItem('cart'))

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState( localCart || {
        totalProducts: 0,
        totalPrice: 0,
        cartItems: []
    })

    const updateCart = (arr) =>{

        const reduceFunc = (total, item) =>{
            return  total + (item.price * item.quantity)
        }

        let length = arr.length
        let price = arr.reduce(reduceFunc, 0)
    

        const newCart = {
            totalProducts: length,
            totalPrice: price,
            cartItems: arr
        }

        setCart(newCart)

    }

    const addToCart = (product) =>{

        let newArr = [...cart.cartItems]
        let foundIndex = newArr.findIndex(x => x.id === product.id);

        if(foundIndex !== -1){
            newArr[foundIndex].quantity += product.quantity;
        }
        else {
            newArr = [...newArr, product]
        }

        updateCart(newArr)

    }

    const removeFromCart = (id) =>{

        let newArr = [...cart.cartItems]
        newArr = newArr.filter((item) => item.id !== id)
        updateCart(newArr)

    }

    const changeQuantity = (id, quantity) =>{
        let newArr = [...cart.cartItems]
        let foundIndex = newArr.findIndex(x => x.id === id);

        if(foundIndex !== -1){

            if(quantity === 0){
                newArr = newArr.filter((item) => item.id !== id)
            }
            else
                newArr[foundIndex].quantity = quantity;
        }

        updateCart(newArr)

    }

    const value = {
        totalProducts: cart.totalProducts,
        totalPrice: cart.totalPrice,
        cartItems: cart.cartItems,
        addToCart,
        removeFromCart,
        changeQuantity
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