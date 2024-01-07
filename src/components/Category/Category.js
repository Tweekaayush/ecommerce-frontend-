import React from 'react'
import './Category.css'
import img1 from '../../assets/images/category/img1.jpg'
import img2 from '../../assets/images/category/img2.jpg'
import img3 from '../../assets/images/category/img3.jpg'
import img4 from '../../assets/images/category/img4.jpg'

const Category = () => {
  return (
    <section id="category">
        <div className="container">
            <div className="category-container">
                <div className="category">
                    <div className="img-overlay"></div>
                    <img src={img1} alt=''/>
                    <h2>Category</h2>
                </div>
                <div className="category">
                    <div className="img-overlay"></div>
                    <img src={img2} alt=''/>
                    <h2>Category</h2>
                </div>
                <div className="category">
                    <div className="img-overlay"></div>
                    <img src={img3} alt=''/>
                    <h2>Category</h2>
                </div>
                <div className="category">
                    <div className="img-overlay"></div>
                    <img src={img4} alt=''/>
                    <h2>Category</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category