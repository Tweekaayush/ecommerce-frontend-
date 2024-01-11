import React, { useContext, useState } from 'react'
import './Filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Filters = ({currentCategory, setCurrentCategory, setSort}) => {

  const {categories} = useContext(ProductContext)
  const [arrange, setArrange] = useState('Featured')
  const navigate = useNavigate()
  const styles = {
    border: '2px solid #222222',
    color: '#222222',
    fontWeight: 600
  }

  const handleChangeCategory = (category) =>{
    setCurrentCategory(category)
    if(category === '')
        navigate(`/browse`)
    else
        navigate(`/browse/${category}`)
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
                <li onClick={()=>handleChangeCategory('')} style={currentCategory === ''? styles : {}} >All</li>
                {
                    categories.map((category, i)=>{
                        return <li key={i} onClick={()=>handleChangeCategory(category)} style={currentCategory === category ? styles : {}}>{category}</li>
                    })
                }
            </ul>
            {/* <ul className='arrange-items-dropdown'>
                <li>{arrange}</li>
                <li>Featured</li>
                <li>Sort by Price low to high</li>
                <li>Sort by Price high to low</li>
            </ul> */}
        </div>
        {/* <button onClick={()=>setSort('no')}>featured</button>
        <button onClick={()=>setSort('asc')}>sortAsc</button>
        <button onClick={()=>setSort('desc')}>sortDesc</button> */}
    </div>
  )
}

export default Filters