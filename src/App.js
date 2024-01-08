import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Layout/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Product from './pages/Product/Product'
import Footer from './components/Layout/Footer/Footer'
import { CartContextProvider } from './context/CartContext'

const App = () => {

  const [cart, setCart] = useState(false)
  const setCartStatus = (e) =>{
    setCart(e)
  }

  return (
    <CartContextProvider>  
      <Router>
        <Navbar cartStatus={cart} setCartStatus={setCartStatus}/>
        <Cart cartStatus={cart} setCartStatus={setCartStatus}/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/product/:id' element={<Product />}></Route>
          <Route exact path='/browse' element={<Browse />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </CartContextProvider>
  )
}

export default App