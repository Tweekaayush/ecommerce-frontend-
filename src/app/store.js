import {configureStore, combineReducers} from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import cartReducer from '../features/cartSlice'


const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})


export default store