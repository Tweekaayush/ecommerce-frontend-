import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartItem = (props) => {
    const navigate = useNavigate()
    const {changeQuantity} = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(props.product.quantity)

    const redirect = (e) =>{
        props.setCartStatus(false)
        navigate(`/product/${props.product.id}`)
    }

    useEffect(()=>{
        changeQuantity(props.product.id, itemQuantity)
    }, [itemQuantity])

  return (
    <div className="cart-item">
        <div className="cart-item-img" onClick={redirect}>
            <img src={props.product.img} alt="" />
        </div>
        <div className="cart-middle">
            <h3>{props.product.title}</h3>
            <p><span>Rs.</span> {props.product.price}</p>
            <div className="cart-quantity-container">
                <button onClick={()=>setItemQuantity(itemQuantity-1)}>-</button>
                <p>{itemQuantity}</p>
                <button onClick={()=>setItemQuantity(itemQuantity+1)}>+</button>
            </div>
        </div>
        <FontAwesomeIcon icon={faXmark} onClick={()=>props.removeFromCart(props.product.id)}/>
    </div>
  )
}

export default CartItem