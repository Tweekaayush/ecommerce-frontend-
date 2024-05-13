import React, { useEffect } from 'react'
import Trending from '../../components/Trending/Trending'
import ProductContent from '../../components/ProductContent/ProductContent'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProductDetails, getProducts } from '../../config/module'
import { selectAllProducts, selectProductDetails } from '../../features/productSlice'

const Product = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const productInfo = useSelector(selectProductDetails)

  
  useEffect(()=>{
    getProducts(dispatch)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(()=>{
    getProductDetails(products, id, dispatch)
  }, [id, products])  
  
  return (
    <>
      <ProductContent {...productInfo}/>
      <ProductDetails {...productInfo}/>
      <Trending products={products}/>
    </>
  )
}

export default Product