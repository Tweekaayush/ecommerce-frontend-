import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    all: [],
    products: [],
    categories: [],
    productsLength: 0, 
    productDetails: {}
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) =>{
            state.all = action.payload.all
            state.products = action.payload.products
            state.categories = action.payload.categories
            state.productsLength = action.payload.productsLength
        },
        setProductDetails: (state, action) =>{
            state.productDetails = action.payload.productDetails
        },
        setFilteredProducts: (state, action) =>{
            state.products = action.payload.products
            state.productsLength = action.payload.productsLength
        }
    }
})

export const {setProducts, setProductDetails, setFilteredProducts} = productSlice.actions

export const selectAllProducts = state => state.products.all
export const selectProducts = state => state.products.products
export const selectCategories = state => state.products.categories
export const selectProductsLength = state => state.products.productsLength
export const selectProductDetails = state => state.products.productDetails


export default productSlice.reducer