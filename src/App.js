import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Layout/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Product from './pages/Product/Product'
import Footer from './components/Layout/Footer/Footer'
import Login from './pages/Login/Login'
import { auth, onAuthStateChanged } from './config/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserId, setUserLoginDetails } from './features/userSlice'
import Account from './pages/Account/Account'

const App = () => {

  const [cart, setCart] = useState(false)
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)
  const setCartStatus = (e) =>{
    setCart(e)
  }
  

  const handleBodyOverflow = (cart) =>{
    cart ? document.body.classList.add('hidden') : document.body.classList.remove('hidden')
  }

  const setUser = async(user) =>{
    dispatch(setUserLoginDetails({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }))
  }

  useEffect(()=>{
    handleBodyOverflow(cart)
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        setUser(user)
      }
    }, [userId])
  }, [cart])

  return (
        <Router>
          <Navbar cartStatus={cart} setCartStatus={setCartStatus}/>
          <Cart cartStatus={cart} setCartStatus={setCartStatus}/>
          <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/product/:id' element={<Product />}></Route>
            <Route exact path='/browse' element={<Browse />}></Route>
            <Route exact path='/browse/:category' element={<Browse />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/account' element={<Account/>}></Route>
          </Routes>
          <Footer/>
        </Router>
  )
}

export default App