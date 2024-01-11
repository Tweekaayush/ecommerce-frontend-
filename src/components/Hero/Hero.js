import React from 'react'
import './Hero.css'
import img from '../../assets/images/Hero/home.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero">
        {/* <div className="hero-bg-design"></div> */}
        <div className="container">
            <div className="hero-container">
                <div className="hero-left-container">
                    <div className="hero-headings">
                        <h3>The Fritz Hansen</h3>
                        <h1>Ikebana vase</h1>
                        <p className='body-text'>
                            This special vase is named after the japanese word for flower arrangement, Ikebana. It is designed to honor and admire the entire flower, including the stem.
                        </p>
                    </div>
                    <Link to="/browse" className='section-btn'>See Collections!</Link>
                </div>
                <div className="hero-right-container">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero