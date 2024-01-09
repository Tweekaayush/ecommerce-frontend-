import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {

  const navigate = useNavigate();
  const linkTo = () =>{
    window.scrollTo(0, 0);
    navigate(`/product/${props.id}`)
  }
  return (
    <div className="product-card" onClick={linkTo}>
      <div className="product-card-head">
        <img src={props.img} alt="" className='product-card-img'/>
      </div>
      <div className="product-card-content">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard