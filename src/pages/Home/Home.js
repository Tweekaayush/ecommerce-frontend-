import React, {useEffect} from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import Trending from '../../components/Trending/Trending'
import PromotionBanner from '../../components/PromotionBanner/PromotionBanner'
import BestSeller from '../../components/BestSeller/BestSeller'
import { useLocation } from 'react-router-dom'
import { getProducts } from '../../config/module'
import { selectCategories, selectProducts } from '../../features/productSlice'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)

  useEffect(()=>{
    getProducts(dispatch)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Hero />
      <CategoryBar categories = {categories}/>
      <Trending products={products}/>
      <Category />
      <BestSeller products={products}/>
      <PromotionBanner/>
    </>
  )
}

export default Home