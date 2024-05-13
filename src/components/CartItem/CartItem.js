import React, { useEffect, useState } from 'react'
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import {changeQuantity} from '../../config/module'
import {useDispatch, useSelector} from 'react-redux'
import { removeFromCart } from '../../config/module'
import { selectCartItems } from '../../features/cartSlice'

const CartItem = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [itemQuantity, setItemQuantity] = useState(props.product.quantity)
    const cartItems = useSelector(selectCartItems)

    const redirect = (e) =>{
        props.setCartStatus(false)
        navigate(`/product/${props.product.id}`)
    }

    useEffect(()=>{
        changeQuantity(cartItems, props.product.id, itemQuantity, dispatch)
    }, [itemQuantity])

    useEffect(()=>{
        setItemQuantity(props.product.quantity)
    }, [props.product.quantity])

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
        <FontAwesomeIcon icon={faXmark} onClick={()=>removeFromCart(cartItems ,props.product.id, dispatch)}/>
    </div>
  )
}

export default CartItem