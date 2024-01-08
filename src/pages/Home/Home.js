import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import Trending from '../../components/Trending/Trending'
import PromotionBanner from '../../components/PromotionBanner/PromotionBanner'
import BestSeller from '../../components/BestSeller/BestSeller'

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryBar/>
      <Trending/>
      <Category />
      <BestSeller/>
      <PromotionBanner/>
    </>
  )
}

export default Home