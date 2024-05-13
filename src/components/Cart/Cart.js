import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import CartItem from '../CartItem/CartItem'
import img from '../../assets/images/cart/empty-cart.png'
import { useNavigate } from 'react-router-dom'
import { selectCartItems, selectTotalPrice, selectTotalProducts } from '../../features/cartSlice'
import { useSelector } from 'react-redux'

const Cart = ({cartStatus, setCartStatus}) => {

  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectTotalPrice)
  const totalProducts = useSelector(selectTotalProducts)

  const handleRedirect = () =>{
    setCartStatus(false)
    navigate('/login')
  }

  return (
    <div id="cart" className={cartStatus?'cart-active':''}>
        <div className="cart-headers">
          <h2>Your shopping cart ({totalProducts})</h2>
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
                    return <CartItem 
                              key={item.id} 
                              product={item} 
                              setCartStatus={setCartStatus}
                            />
                  })
                }
              </div>
              <div className="cart-summary">
                <div className="cart-subtotal">
                  <h3>Subtotal: </h3>
                  <p>Rs. {totalPrice}/-</p>
                </div>
                <button className='section-btn' onClick={handleRedirect}>Checkout</button>
              </div>
            </div>
            )
          }
        </div>
    </div>
  )
}

export default Cart