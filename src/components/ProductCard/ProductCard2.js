import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard2 = (props) => {

  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={()=>navigate(`/product/${props.id}`)}>
      <div className="product-card-head">
        <img src={props.img} alt="" className='product-card2-img'/>
      </div>
      <div className="product-card-content">
            <h3>{props.title}</h3>
            <p>Rs.{props.price} </p>
      </div>
    </div>
  )
}

export default ProductCard2