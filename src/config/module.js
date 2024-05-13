import db, { getDocs, collection } from "./firebase"
import { setProducts, setProductDetails, setFilteredProducts } from "../features/productSlice"
import { setCart } from "../features/cartSlice"

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

const updateCart = (arr, dispatch) =>{

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

    dispatch(setCart(newCart))

}

export const addToCart = (cart, product, dispatch) =>{

    let newArr = [...cart]
    let arr = []
    let foundIndex = newArr.findIndex(x => x.id === product.id);

    if(foundIndex !== -1){
        newArr.forEach((item, i)=>{
            if(i === foundIndex){
                arr = [...arr, {...item, quantity: item.quantity + product.quantity}]
            }
            else
                arr = [...arr, item]
        })
    }
    else {
        arr = [...newArr, product]
    }

    updateCart(arr, dispatch)

}

export const removeFromCart = (cart, id, dispatch) =>{

    let newArr = [...cart]
    newArr = newArr.filter((item) => item.id !== id)
    updateCart(newArr, dispatch)

}

export const changeQuantity = (cart, id, quantity, dispatch) =>{

    let newArr = [...cart]
    let arr = []
    let foundIndex = newArr.findIndex(x => x.id === id);

    if(foundIndex !== -1){

        if(quantity === 0){
            arr = newArr.filter((item) => item.id !== id)
        }
        else{
            newArr.forEach((item, i)=>{
                if(i === foundIndex){
                    arr = [...arr, {...item, quantity: quantity}]
                }
                else
                    arr = [...arr, item]
            })
        }
    }

    updateCart(arr, dispatch)

}