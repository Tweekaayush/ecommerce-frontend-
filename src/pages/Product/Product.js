import React, { useContext, useEffect, useState } from 'react'
import Trending from '../../components/Trending/Trending'
import ProductContent from '../../components/ProductContent/ProductContent'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { ProductContext } from '../../context/ProductContext'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Product = () => {
  const {id} = useParams()
  const {products, getProductDetails} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const [productInfo, setProductInfo] = useState(getProductDetails(id))
  useEffect(()=>{
    setProductInfo(getProductDetails(id))
  }, [id])
  
  return (
    <>
      <ProductContent {...productInfo} addToCart={addToCart}/>
      <ProductDetails {...productInfo}/>
      <Trending products={products}/>
    </>
  )
}

export default Product