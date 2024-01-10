import React, {useContext, useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Navbar = ({cartStatus, setCartStatus}) => {

  const {totalProducts} = useContext(CartContext)
  const navigate = useNavigate()
  const [scroll, setScroll] = useState(false)

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0) 
        setScroll(true);
    else{
        setScroll(false)
    } 
  });

  return (
    <>
      <div id="page-overlay" className={cartStatus?'page-overlay-active':''} onClick={()=>setCartStatus(false)}></div>
      <nav className={scroll?'scrolled':''}>
        <div className="nav-container">
          <a href="/" className="nav-brand">Ecommerce</a>
          <ul className={scroll?'nav-links nav-active':'nav-links'}>
            <li className="nav-item" onClick={() => navigate('/browse')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Browse</p>
            </li>
            <li className="nav-item" onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} />
              <p>Account</p>
            </li>
            <li className="nav-item" onClick={()=>setCartStatus(true)}>
              <FontAwesomeIcon icon={faCartShopping}/>
              <p>Cart</p>
              {
                totalProducts ? <span>{totalProducts}</span>:''
              }
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar