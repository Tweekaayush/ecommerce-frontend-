import React from 'react'
import './BestSeller.css'
import ProductCard2 from '../ProductCard/ProductCard2';

const BestSeller = () => {
    
  return (
    <section id="bestSeller">
        <div className="container">
            <div className="bestSeller-container">
                <h1 className="section-heading">Best Seller</h1>
                <div className="bestSeller-list">
                    <ProductCard2/>
                    <ProductCard2/>
                    <ProductCard2/>
                    <ProductCard2/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestSeller