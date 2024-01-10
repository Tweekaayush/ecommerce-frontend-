import React from 'react'
import './BrowseProducts.css'
import ProductCard2 from '../ProductCard/ProductCard2'
import Pagination from '../Pagination/Pagination'

const BrowseProducts = ({products, productsLength, page, setPage}) => {
  
  const paginate = 6

  return (
        <div className="browse-product-container">
            <div className="browse-product-grid">
              {
                products.slice((page-1)*paginate, paginate+((page-1)*paginate)).map((product)=>{
                  return <ProductCard2 key = {product.id} {...product}/>
                })
              }
            </div>
            <Pagination page={page} setPage={setPage} productsLength={productsLength} paginate={paginate}/>
        </div>
  )
}

export default BrowseProducts