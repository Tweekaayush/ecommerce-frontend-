import React, {useEffect, useState} from 'react'
import './BrowseProducts.css'
import ProductCard2 from '../ProductCard/ProductCard2'
import { Pagination } from '@mui/material'

const BrowseProducts = ({products, productsLength, page, setPage}) => {
  
  const paginate = 6
  const [totalPages, setTotalPages] = useState(1)

  const handlePageChange = (e, p) =>{
    setPage(p)
    window.scrollTo(0, 0)
  }

  useEffect(()=>{
      setTotalPages(Math.ceil(productsLength/paginate))
  }, [productsLength])

  return (
        <div className="browse-product-container">
            <div className="browse-product-grid">
              {
                products?.slice((page-1)*paginate, paginate+((page-1)*paginate)).map((product)=>{
                  return <ProductCard2 key = {product.id} {...product}/>
                })
              }
            </div>
            <div className='pagination-container'>
              <Pagination count={totalPages} onChange={handlePageChange} page={page} size='large'/>
            </div>
        </div>
  )
}

export default BrowseProducts