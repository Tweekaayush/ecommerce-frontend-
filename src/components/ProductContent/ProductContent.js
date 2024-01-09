import React, { useEffect, useState } from 'react'
import './ProductContent.css'

const ProductContent = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [homeImg, setHomeImg] = useState(props.img)

  const increment = () =>{
    setQuantity(quantity + 1)
  }

  const decrement = () =>{
    if(quantity !== 1)
        setQuantity(quantity - 1)
  }

  const AddToCart = ()=>{
    const product = {...props, quantity}
    props.addToCart(product)
  }

  useEffect(()=>{
    setHomeImg(props.img)
    setQuantity(1)
  },[props.img])

  return (
    <section id="product">
        <div className="container">
            <div className="product-container">
                <div className="product-left-container">
                    <div className="product-img-display">
                        <img src={homeImg} alt="" />
                    </div>
                    <div className="product-img-list">
                        <div className="product-img-item" onClick={()=>setHomeImg(props.img)}>
                            <img src={props.img} alt="" />
                        </div>
                        {
                            props.otherImgs.map((im, i)=>{
                                return (
                                    <div key={i} className="product-img-item" onClick={()=>setHomeImg(im)}>
                                        <img src={im} alt="" />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="product-right-container">
                    <h1 className="product-heading">{props.title}</h1>
                    <h2>rating</h2>
                    <p className='body-text'>{props.description}</p>
                    <p className='product-price'>Rs. {props.price}</p>
                    <div className='product-quantity-container'>
                        <button onClick={decrement}>-</button>
                        <p>{quantity}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="product-btns">
                        <button onClick={AddToCart}>Add to cart</button>
                        <button>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductContent