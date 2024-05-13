import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || {
    totalProducts: 0,
    totalPrice: 0,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) =>{
            state.totalProducts = action.payload.totalProducts
            state.totalPrice = action.payload.totalPrice
            state.cartItems = action.payload.cartItems
            localStorage.setItem("cart", JSON.stringify(action.payload))
        },
    }
})

export const { setCart } = cartSlice.actions

export const selectTotalProducts = state => state.cart.totalProducts
export const selectTotalPrice = state => state.cart.totalPrice
export const selectCartItems = state => state.cart.cartItems

export default cartSlice.reducer