import React, { useState } from 'react'
import './ProductContent.css'
import img from '../../assets/images/products/1.jpg'

const ProductContent = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <section id="product">
        <div className="container">
            <div className="product-container">
                <div className="product-left-container">
                    <div className="product-img-display">
                        <img src={img} alt="" />
                    </div>
                    <div className="product-img-list">
                        <div className="product-img-item">
                            <img src={img} alt="" />
                        </div>
                        <div className="product-img-item">
                            <img src={img} alt="" />
                        </div>
                        <div className="product-img-item">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="product-right-container">
                    <h1 className="product-heading">Title</h1>
                    <h2>rating</h2>
                    <p className='body-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui iusto voluptatem iste, autem aliquid corrupti. Laboriosam voluptate, unde sint voluptatum, est consequatur magnam nemo voluptas repudiandae perferendis amet ad.</p>
                    <p className='product-price'>50$</p>
                    <div className='product-quantity-container'>
                        <button>-</button>
                        <p>{quantity}</p>
                        <button>+</button>
                    </div>
                    <button className='section-btn'>Add to cart</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductContent