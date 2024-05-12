import {configureStore, combineReducers} from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'


const rootReducer = combineReducers({
    products: productReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})


export default store