import React, {useState, createContext} from 'react'
import {items} from '../productlist'

export const ProductContext = createContext()


const gettingCategory = () =>{
    let newArr = new Set(items.map((item)=>item.category))
    return [...newArr]
}

export const ProductContextProvider = ({children}) =>{
    const [products, setProducts] = useState(items)
    const [productsLength, setProductsLength] = useState(products.length)
    const [categories, setCategories] = useState(gettingCategory)

    const getProductDetails = (id) => {
        return products.find((product) => product.id === Number(id))
    }

    const getFilteredProducts = (category) =>{
        if(category === ''){
            setProducts(items)
            setProductsLength(items.length)
        }
        else{
            let newArr = items.filter((product)=>product.category === category)
            setProducts(newArr)
            setProductsLength(newArr.length)
        }
    }

    const getAllProducts = () =>{
        setProducts(items)
    }

    const sortProducts = (reverse) =>{
        reverse ? products.sort((a, b) => b.price - a.price): products.sort((a, b) => a.price - b.price)
        setProducts(products)
    }

    const value = {
        products, 
        getProductDetails, 
        productsLength, 
        categories,
        getFilteredProducts,
        getAllProducts,
        sortProducts
    }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}