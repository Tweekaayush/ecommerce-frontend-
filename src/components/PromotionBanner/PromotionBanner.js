import React from 'react'
import './PromotionBanner.css'
import img from '../../assets/images/Hero/banner2.jpg'
import { Link } from 'react-router-dom'

const PromotionBanner = () => {
  
  return (
    <section id="promotion">
        <div className="container">
            <div className="promotion-container">
                <div className="promotion-left-container">
                    <img src={img} alt="" />
                </div>
                <div className="promotion-right-container">
                    <h1>
                        Comfortable & Elegante Living
                    </h1>
                    <p className='body-text'>
                    RAOUF Products are all made to standard sizes so that you can mix and match them freely.
                    </p>
                    <Link to="/browse" className='section-btn'>Shop Now</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PromotionBanner