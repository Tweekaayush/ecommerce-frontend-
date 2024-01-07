import React from 'react'
import './ProductCard.css'
import img from '../../assets/images/products/1.jpg'

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-head">
        <img src={img} alt="" className='product-card-img'/>
      </div>
      <div className="product-card-content">
            <h3>Product Title</h3>
            <p>50$</p>
      </div>
    </div>
  )
}

export default ProductCard