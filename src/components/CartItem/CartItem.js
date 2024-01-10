import React from 'react'
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CartItem = (props) => {
    const navigate = useNavigate()

    const redirect = (e) =>{
        props.setCartStatus(false)
        navigate(`/product/${props.product.id}`)
    }

  return (
    <div className="cart-item">
        <div className="cart-item-img" onClick={redirect}>
            <img src={props.product.img} alt="" />
        </div>
        <div className="cart-middle">
            <h3>{props.product.title}</h3>
            <p><span>Rs.</span> {props.product.price}</p>
            <p><span>Quantity:</span> {props.product.quantity}</p>
        </div>
        <FontAwesomeIcon icon={faXmark} onClick={()=>props.removeFromCart(props.product.id)}/>
    </div>
  )
}

export default CartItem