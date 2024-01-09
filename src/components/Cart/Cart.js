import React, { useContext } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import img from '../../assets/images/cart/empty-cart.png'

const Cart = ({cartStatus, setCartStatus}) => {
  const {cartItems, totalPrice, totalProducts, removeFromCart} = useContext(CartContext)
  return (
    <div id="cart" className={cartStatus?'cart-active':''}>
        <div className="cart-headers">
          <h2>Your shopping cart(0)</h2>
          <FontAwesomeIcon icon={faXmark} onClick={() => setCartStatus(false)}/>
        </div>
        <div className="cart-content">
          {
            totalProducts===0?(
              <div className="empty-cart">
                <img src={img} alt="" />
                <p>Your cart is empty!</p>
                <button className='section-btn' onClick={()=>setCartStatus(false)}>Keep Browsing</button>
              </div>
            ):(  
            <div className="cart-with-items">
              <div className="cart-item-list">
                {
                  cartItems.map((item)=>{
                    return <CartItem key={item.id} product={item} removeFromCart={removeFromCart} setCartStatus={setCartStatus}/>
                  })
                }
              </div>
              <div className="cart-summary">
                <p>
                  Subtotal: {totalPrice}
                </p>
              </div>
            </div>
            )
          }
        </div>
    </div>
  )
}

export default Cart