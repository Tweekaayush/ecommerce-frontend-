import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/images/cart/empty-cart.png'

const Cart = ({cartStatus, setCartStatus}) => {
  return (
    <div id="cart" className={cartStatus?'cart-active':''}>
        <div className="cart-headers">
          <h2>Your shopping cart(0)</h2>
          <FontAwesomeIcon icon={faXmark} onClick={() => setCartStatus(false)}/>
        </div>
        <div className="cart-content">
          <div className="empty-cart">
            <img src={img} alt="" />
            <p>Your cart is empty!</p>
            <button className='section-btn' onClick={()=>setCartStatus(false)}>Keep Browsing</button>
          </div>
        </div>
    </div>
  )
}

export default Cart