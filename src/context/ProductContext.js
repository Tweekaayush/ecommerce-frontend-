import React, {useState, createContext} from 'react'
import {items} from '../productlist'

export const ProductContext = createContext()

export const ProductContextProvider = ({children}) =>{
    const [products, setProducts] = useState(items)

    const getProductDetails = (id) => {
        return products.find((product) => product.id === Number(id))
    }

    return <ProductContext.Provider value={{products, getProductDetails}}>
        {children}
    </ProductContext.Provider>
}