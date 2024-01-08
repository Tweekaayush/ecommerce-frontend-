import React from 'react'
import './ProductSlider.css'
import ProductCard from '../ProductCard/ProductCard';

const ProductSlider = (props) => {
  return (
    <div className="slider-container" id={props.id}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  );
}

export default ProductSlider