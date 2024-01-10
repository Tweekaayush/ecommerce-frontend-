import React, { useContext, useEffect, useState } from 'react'
import Trending from '../../components/Trending/Trending'
import ProductContent from '../../components/ProductContent/ProductContent'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { ProductContext } from '../../context/ProductContext'
import { useParams, useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Product = () => {
  const {id} = useParams()
  const {pathname} = useLocation()
  const {products, getProductDetails} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const [productInfo, setProductInfo] = useState(getProductDetails(id))

  
  useEffect(()=>{
    window.scrollTo(0, 0)
    setProductInfo(getProductDetails(id))
  }, [id, pathname])
  
  return (
    <>
      <ProductContent {...productInfo} addToCart={addToCart}/>
      <ProductDetails {...productInfo}/>
      <Trending products={products}/>
    </>
  )
}

export default Product