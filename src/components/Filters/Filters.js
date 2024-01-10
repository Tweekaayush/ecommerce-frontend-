import React, { useContext } from 'react'
import './Filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Filters = ({currentCategory, setCurrentCategory, sortProducts}) => {

  const {categories} = useContext(ProductContext)
  const navigate = useNavigate()
  const styles = {
    border: '2px solid #222222',
    color: '#222222',
    fontWeight: 600
  }

  return (
    <div className="filter-container">
        <div className='back-link' onClick={()=>navigate('/')}>
            <FontAwesomeIcon icon={faAngleLeft}/>
            <p>Home</p>
        </div>
        <div className="filter-content">
            <div className="filter-header">
                <h2 className='section-heading'>Categories</h2>
            </div>
            <ul className='category-filter'>
                <li onClick={()=>setCurrentCategory('')} style={currentCategory === ''? styles : {}} >All</li>
                {
                    categories.map((category, i)=>{
                        return <li key={i} onClick={()=>setCurrentCategory(category)} style={currentCategory === category ? styles : {}}>{category}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Filters