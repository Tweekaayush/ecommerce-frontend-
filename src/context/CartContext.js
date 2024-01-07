import React, {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [state, setState] = useState('Connected')
    return <CartContext.Provider value={{state}}>
        {children}
    </CartContext.Provider>
}