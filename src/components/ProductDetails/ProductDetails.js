import React from 'react'
import './ProductDetails.css'

const ProductDetails = ({texture, weight, size}) => {
  return (
    <section id="product-details">
        <div className="container">
            <div className="product-details-container">
                <h1 className='section-heading'>Product Details</h1>
                <ul className="product-details-content">
                    <li className="detail">
                        <h2>Dimension(cm): </h2>
                        <p>{size}</p>
                    </li>
                    <li className="detail">
                        <h2>Weight: </h2>
                        <p>{weight}</p>
                    </li>
                    <li className="detail">
                        <h2>Texture: </h2>
                        <p>{texture}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails