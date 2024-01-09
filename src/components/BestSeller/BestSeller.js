import React from 'react'
import './BestSeller.css'
import ProductCard2 from '../ProductCard/ProductCard2';

const BestSeller = ({products}) => {
    
  return (
    <section id="bestSeller">
        <div className="container">
            <div className="bestSeller-container">
                <h1 className="section-heading">Best Seller</h1>
                <div className="bestSeller-list">
                  {
                    products.slice(8, 16).map((product)=>{
                      return <ProductCard2 key={product.id} {...product}/>
                    })
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestSeller