import React from 'react'
import './ProductCard.css'
import img from '../../assets/images/products/1.jpg'
import { useNavigate } from 'react-router-dom'

const ProductCard2 = () => {

  const navigate = useNavigate();
  const linkTo = () =>{
    window.scrollTo(0, 0);
    navigate('/product/id')
  }

  return (
    <div className="product-card" onClick={linkTo}>
      <div className="product-card-head">
        <img src={img} alt="" className='product-card2-img'/>
      </div>
      <div className="product-card-content">
            <h3>Product Title</h3>
            <p>50$</p>
      </div>
    </div>
  )
}

export default ProductCard2