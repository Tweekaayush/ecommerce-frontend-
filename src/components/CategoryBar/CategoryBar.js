import React from 'react'
import './CategoryBar.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const CategoryBar = ({categories}) => {
  const navigate = useNavigate()

  return (
    <section id="category-bar">
        <div className="container">
            <div className="category-bar-container">
              {
                categories.map((category, i)=>{
                  return (
                    <div key={i} onClick={()=>navigate(`/browse/${category}`)}>
                      <p>{category}</p>
                      <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default CategoryBar