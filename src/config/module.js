import db, { getDocs, collection } from "./firebase"
import { setProducts, setProductDetails, setFilteredProducts } from "../features/productSlice"

export const getProducts = async (dispatch) =>{
    let all = []
    const snapshot = await getDocs(collection(db, 'products'))
    snapshot.forEach((doc)=>{
        all = [...all, {id: doc.id, ...doc.data()}]
    })

    let newArr = new Set(all.map((item)=>item.category))
    
    dispatch(setProducts({
        all: all,
        products: all,
        categories: [...newArr],
        productsLength: all.length
    }))

}

export const getProductDetails = (products, id, dispatch) =>{

    let pD = products.find((product) => product.id === id)
    dispatch(setProductDetails({
        productDetails: pD
    }))
}

export const getFilteredProducts = (products, category, sort, dispatch)=>{

    let newArr = [...products]

    if(category !== ''){
        newArr = products.filter((product)=>product.category === category)
    }

    if(sort !== 'no')
        newArr = sort === 'asc'? sortProducts(products, false) : sortProducts(products, true)

    dispatch(setFilteredProducts({
        products: newArr,
        productsLength: newArr.length
    }))
}

const sortProducts = (newArr, reverse) =>{
    return reverse ? [...newArr].sort((a, b) => b.price - a.price): [...newArr].sort((a, b) => a.price - b.price)
}