import React from 'react'
import './Trending.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard';

const Trending = () => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 230;
      };
    
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 230;
      };
  return (
    <section id="trending">
        <div className="container">
            <div className="trending-container">
                <div className="trending-upper-container">
                    <h1 className="trending-heading">Trending Now</h1>
                    <div className="trending-navigator">
                        <FontAwesomeIcon onClick={slideLeft} icon={faArrowLeft} />
                        <FontAwesomeIcon onClick={slideRight} icon={faArrowRight} />
                    </div>
                </div>
                <div className="trending-lower-container" id='slider'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending