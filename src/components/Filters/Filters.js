import React, { useContext, useRef, useState, useEffect } from 'react'
import './Filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import SortIcon from '@mui/icons-material/Sort';


function useComponentVisible(initialVal, sortFilter){
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(initialVal)

  const handleOutsideClick = (e) =>{
    if(ref.current && !ref.current.contains(e.target)){
      sortFilter.current.classList.remove('arrange-items-active')
      setIsVisible(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', handleOutsideClick, true)
    return ()=>{
      document.removeEventListener('click', handleOutsideClick, true)
    }
  }, [])

  return {ref, isVisible, setIsVisible}
}

const Filters = ({currentCategory, setCurrentCategory, setSort, sortStatus}) => {

  const sortFilter = useRef(null)
  const {categories} = useContext(ProductContext)
  const navigate = useNavigate()
  const {ref, isVisible, setIsVisible} = useComponentVisible(false, sortFilter)

  const styles = {
    border: '2px solid #222222',
    color: '#222222',
    fontWeight: 600
  }

  const filterStyles = {
    backgroundColor: '#D5977E'
  }

  const handleChangeCategory = (category) =>{
    setCurrentCategory(category)
    if(category === '')
        navigate(`/browse`)
    else
        navigate(`/browse/${category}`)
  }

  const handleArrangeItems = () =>{
    if(!isVisible)
      sortFilter.current.classList.add('arrange-items-active')
    else
      sortFilter.current.classList.remove('arrange-items-active')
    setIsVisible(!isVisible)
  }
  
  const closeArrangeItems = (e) =>{
    setSort(e)
    sortFilter.current.classList.remove('arrange-items-active')
    isVisible(false)
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
            <div className="arrange-items">
                <SortIcon ref={ref} onClick={handleArrangeItems}/>
                <ul className='arrange-items-dropdown' ref={sortFilter}>
                    <li onClick={()=> closeArrangeItems('no')} style={sortStatus === 'no'?filterStyles:{}}>Featured</li>
                    <li onClick={()=> closeArrangeItems('asc')} style={sortStatus === 'asc'?filterStyles:{}}>Sort by Price: low to high</li>
                    <li onClick={()=> closeArrangeItems('desc')} style={sortStatus === 'desc'?filterStyles:{}}>Sort by Price: high to low</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Filters