import React, {useContext, useEffect} from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import Trending from '../../components/Trending/Trending'
import PromotionBanner from '../../components/PromotionBanner/PromotionBanner'
import BestSeller from '../../components/BestSeller/BestSeller'
import { ProductContext } from '../../context/ProductContext'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const {pathname} = useLocation()
  const {products, getAllProducts} = useContext(ProductContext)

  useEffect(()=>{
    window.scrollTo(0, 0)
    getAllProducts()
  }, [pathname])

  return (
    <>
      <Hero />
      <CategoryBar/>
      <Trending products={products}/>
      <Category />
      <BestSeller products={products}/>
      <PromotionBanner/>
    </>
  )
}

export default Home