import React, { useEffect, useState } from 'react'
import './Browse.css'
import Filters from '../../components/Filters/Filters'
import BrowseProducts from '../../components/BrowseProducts/BrowseProducts'
import { useParams } from 'react-router-dom'
import { selectAllProducts, selectCategories, selectProducts, selectProductsLength } from '../../features/productSlice'
import { getFilteredProducts, getProducts } from '../../config/module'
import {useDispatch, useSelector} from 'react-redux'

const Browse = () => {

  const { category } = useParams()
  const dispatch = useDispatch()
  const all = useSelector(selectAllProducts)
  const products = useSelector(selectProducts)
  const productsLength = useSelector(selectProductsLength)
  const [currentCategory, setCurrentCategory] = useState(category || '')
  const [sort ,setSort] = useState('no')
  const [page, setPage] = useState(1)
  const categories = useSelector(selectCategories)


  useEffect(()=>{
    getProducts(dispatch)
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    getFilteredProducts(all, currentCategory, sort, dispatch)
    if(category)
      setCurrentCategory(category)
    else
      setCurrentCategory('')
    setPage(1)
  }, [all, currentCategory, category, sort])

  return (
    <section id="browse">
      <div className="container">
        <div className="browse-container">
          <Filters  currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} setSort={setSort} sortStatus={sort} categories={categories}/>
          <BrowseProducts products={products} productsLength={productsLength} page={page} setPage={setPage} />
        </div>
      </div>
    </section>
  )
}

export default Browse