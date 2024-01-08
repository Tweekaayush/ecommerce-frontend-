import React from 'react'
import './PromotionBanner.css'
import img from '../../assets/images/Hero/banner2.jpg'

const PromotionBanner = () => {
  return (
    <section id="promotion">
        <div className="container">
            <div className="promotion-container">
                <div className="promotion-left-container">
                    <img src={img} alt="" />
                </div>
                <div className="promotion-right-container">
                    <h1>Heading</h1>
                    <p className='body-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque earum temporibus numquam nisi nobis.</p>
                    <a href="/" className='section-btn'>Shop Now</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PromotionBanner