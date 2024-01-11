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

    const getFilteredProducts = (category, sort) =>{
        let newArr = [...items]
        if(category !== ''){
            newArr = items.filter((product)=>product.category === category)
        }
        if(sort !== 'no')
            newArr = sort === 'asc'? sortProducts(newArr, false) : sortProducts(newArr, true)
        setProducts(newArr)
        setProductsLength(newArr.length)
    }

    const getAllProducts = () =>{
        setProducts(items)
    }

    const sortProducts = (newArr, reverse) =>{
        reverse ? newArr.sort((a, b) => b.price - a.price): newArr.sort((a, b) => a.price - b.price)
        return newArr
    }

    const value = {
        products, 
        getProductDetails, 
        productsLength, 
        categories,
        getFilteredProducts,
        getAllProducts,
    }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}