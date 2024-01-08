import React from 'react'
import './Hero.css'
import img from '../../assets/images/Hero/banner1.jpg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero-left-container">
                    <div className="hero-headings">
                        <h3>Lorem, ipsum dolor.</h3>
                        <h1>Lorem, ipsum.</h1>
                        <p className='body-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque ducimus amet facilis. Dicta debitis sit nam, non autem suscipit.</p>
                    </div>
                    <a href="/" className='section-btn'>See Collections!</a>
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