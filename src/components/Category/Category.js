import React from 'react'
import './Category.css'
import img1 from '../../assets/images/category/img1.jpg'
import img2 from '../../assets/images/category/img2.jpg'
import img3 from '../../assets/images/category/img3.jpg'
import img4 from '../../assets/images/category/img4.jpg'
import { useNavigate } from 'react-router-dom'

const Category = () => {

  const navigate = useNavigate()
    const handleRedirect = (category) =>{
        navigate(`/browse/${category}`)
    }

  return (
    <section id="category">
        <div className="container">
            <div className="category-container">
                <div className="category" onClick={()=>handleRedirect('furniture')}>
                    <div className="img-overlay"></div>
                    <img src={img1} alt=''/>
                    <h2>Furniture</h2>
                </div>
                <div className="category" onClick={()=>handleRedirect('skin-care')}>
                    <div className="img-overlay"></div>
                    <img src={img2} alt=''/>
                    <h2>Skin Care</h2>
                </div>
                <div className="category" onClick={()=>handleRedirect('kitchen')}>
                    <div className="img-overlay"></div>
                    <img src={img3} alt=''/>
                    <h2>Kitchen</h2>
                </div>
                <div className="category" onClick={()=>handleRedirect('electronic')}>
                    <div className="img-overlay"></div>
                    <img src={img4} alt=''/>
                    <h2>Electronic</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category