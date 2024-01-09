import React from 'react'
import './BrowseProducts.css'
import ProductCard2 from '../ProductCard/ProductCard2'
import Pagination from '../Pagination/Pagination'

const BrowseProducts = () => {
  return (
        <div className="browse-product-container">
            <div className="browse-product-grid">
                <ProductCard2/>
                <ProductCard2/>
                <ProductCard2/>
                <ProductCard2/>
            </div>
            <Pagination />
        </div>
  )
}

export default BrowseProducts