import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Layout/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Product from './pages/Product/Product'
import Footer from './components/Layout/Footer/Footer'
import { CartContextProvider } from './context/CartContext'
import { ProductContextProvider } from './context/ProductContext'
import Login from './pages/Login/Login'

const App = () => {

  const [cart, setCart] = useState(false)
  const setCartStatus = (e) =>{
    setCart(e)
  }

  const handleBodyOverflow = (cart) =>{
    cart ? document.body.classList.add('hidden') : document.body.classList.remove('hidden')
  }

  useEffect(()=>{
    handleBodyOverflow(cart)
  }, [cart])

  return (
    <ProductContextProvider>
      <CartContextProvider>  
        <Router>
          <Navbar cartStatus={cart} setCartStatus={setCartStatus}/>
          <Cart cartStatus={cart} setCartStatus={setCartStatus}/>
          <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/product/:id' element={<Product />}></Route>
            <Route exact path='/browse' element={<Browse />}></Route>
            <Route exact path='/browse/:category' element={<Browse />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
          </Routes>
          <Footer/>
        </Router>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App