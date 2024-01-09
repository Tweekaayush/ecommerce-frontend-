import React from 'react'
import './Trending.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ProductSlider from '../ProductSlider/ProductSlider';

const Trending = ({products}) => {
    const slideLeft = () => {
        let slider = document.getElementById('trendingSlider');
        slider.scrollLeft = slider.scrollLeft - 235;
      };
    
      const slideRight = () => {
        let slider = document.getElementById('trendingSlider');
        slider.scrollLeft = slider.scrollLeft + 235;
      };
  return (
    <section id="trending">
        <div className="container">
            <div className="trending-container">
                <div className="trending-upper-container">
                    <h1 className="section-heading">Trending Now</h1>
                    <div className="trending-navigator">
                        <FontAwesomeIcon onClick={slideLeft} icon={faArrowLeft} />
                        <FontAwesomeIcon onClick={slideRight} icon={faArrowRight} />
                    </div>
                </div>
                <ProductSlider products={products}/>
            </div>
        </div>
    </section>
  )
}

export default Trending