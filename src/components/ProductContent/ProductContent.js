import React, { useEffect, useState } from 'react'
import './ProductContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Alert, Snackbar, Slide } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function TransitionTop(props) {
    return <Slide {...props} direction="top" />;
  }

const ProductContent = (props) => {

  const navigate = useNavigate()  
  const [quantity, setQuantity] = useState(1)
  const [homeImg, setHomeImg] = useState(props.img)
  const [open, setOpen] = useState(false)

  const increment = () =>{
    setQuantity(quantity + 1)
  }

  const decrement = () =>{
    if(quantity !== 1)
        setQuantity(quantity - 1)
  }

  const AddToCart = ()=>{
    setOpen(true)
    const product = {...props, quantity}
    props.addToCart(product)
  }

  const handleClose = () =>{
    setOpen(false)
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
                    <div className="product-headers">
                        <h1 className="product-heading">{props.title}</h1>
                        <h2>{props.ratings} <FontAwesomeIcon icon={faStar} /></h2>
                    </div>
                    <p className='body-text'>{props.description}</p>
                    <p className='product-price'>₹ {props.price}</p>
                    <div className='product-quantity-container'>
                        <button onClick={decrement}>-</button>
                        <p>{quantity}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="product-btns">
                        <button onClick={AddToCart}>
                            <FontAwesomeIcon icon={faCartShopping}/> Add to cart
                        </button>
                        <button onClick={()=>navigate('/login')}>
                            <FontAwesomeIcon icon={faHeart} /> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal: 'center'}} TransitionComponent={TransitionTop}>
            <Alert variant='filled' onClose={handleClose} severity="success">
                Added To Cart
            </Alert>
        </Snackbar>
    </section>
  )
}

export default ProductContent