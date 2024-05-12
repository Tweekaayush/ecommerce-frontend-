import React from 'react'
import './ProductSlider.css'
import ProductCard from '../ProductCard/ProductCard';

const ProductSlider = ({products}) => {
  return (
    <div className="slider-container" id='trendingSlider'>
      {
        products?.slice(0, 8).map((product)=>{
          return <ProductCard key={product.id} {...product}/>
        })
      }
    </div>
  );
}

export default ProductSlider