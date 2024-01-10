import React, { useContext, useEffect, useState } from 'react'
import './Browse.css'
import Filters from '../../components/Filters/Filters'
import BrowseProducts from '../../components/BrowseProducts/BrowseProducts'
import {ProductContext} from '../../context/ProductContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Browse = () => {

  const { category } = useParams()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {products, productsLength, getFilteredProducts, sortProducts} = useContext(ProductContext)
  const [currentCategory, setCurrentCategory] = useState(category || '')
  const [page, setPage] = useState(1)

  useEffect(()=>{
    window.scrollTo(0, 0)
    getFilteredProducts(currentCategory)
    setPage(1)
    if(currentCategory !== '')
      navigate(`/browse/${currentCategory}`)
    else
      navigate('/browse')
    
  }, [currentCategory, pathname])

  return (
    <section id="browse">
      <div className="container">
        <div className="browse-container">
          <Filters  currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} sortProducts={sortProducts}/>
          <BrowseProducts products={products} productsLength={productsLength} page={page} setPage={setPage}/>
        </div>
      </div>
    </section>
  )
}

export default Browse