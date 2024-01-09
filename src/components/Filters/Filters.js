import React, { useRef, useState } from 'react'
import './Filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight,faXmark } from '@fortawesome/free-solid-svg-icons'

const Filters = () => {

  const [category, setCategory] = useState('all')
  const categoryRef = useRef(null)
  const priceRef = useRef(null)
  const [list, setList] = useState([])
  const type = [
    {
        name: 'All',
        value: 'all'
    },
    {
        name: 'Chair',
        value: 'chair'
    }
  ]
  const price = [
    {
        name: '0 - 1000',
        value: 'all'
    },
    {
        name: '1000 - 2000',
        value: 'chair'
    }
  ]
  const [activeFilter, setActiveFilter] = useState([
    {   
        id: 0,
        name: '0 - 1000',
        value: 'all'
    },
    {
        id: 1,
        name: 'All',
        value: 'all'
    },
  ])

  const handleFilter = (e) =>{
    const ul = document.querySelector('.filter-children')
    ul.classList.toggle('filter-children-toggle')

    if(e === 'category'){
        categoryRef.current.classList.toggle('filter-toggle')
        priceRef.current.classList.remove('filter-toggle')
        setList(type)
    }else if(e === 'price'){
        priceRef.current.classList.toggle('filter-toggle')
        categoryRef.current.classList.remove('filter-toggle')
        setList(price)
    }
  }

  const handleFilterDelete = (id) =>{
      let newArr = [...activeFilter]
      newArr = newArr.filter((item)=> item.id !== id)
      console.log(newArr)
    setActiveFilter(newArr)
  }

  return (
    <div className="filter-container">
        <div className='back-link'>
            <FontAwesomeIcon icon={faAngleLeft}/>
            <p>Home</p>
        </div>
        <div className="filter-header">
            <h2 className='section-heading'>Filters</h2>
        </div>
        <ul className="filter-content">
            <li ref={categoryRef} onClick={() => handleFilter('category')} >
                <p>Categories</p>
                <FontAwesomeIcon icon={faAngleRight}/>
            </li>
            <li ref={priceRef} onClick={()=>handleFilter('price')}>
                <p>Price</p>
                <FontAwesomeIcon icon={faAngleRight}/>
            </li>
        </ul>
        <ul className="filter-children">
            {
                list.map((item, i)=>{
                    return (
                        <li key ={i}>
                            <input type="checkbox" value={item.value} checked={category === item.value} onChange={()=>setCategory(item.value)} name={item.value}/>
                            <label for={item.value}>{item.name}</label>
                        </li>
                    );
                })
            }
        </ul>
        <ul className="active-filters">
            {
                activeFilter.map((item)=>{
                    return (
                        <li key={item.id} onClick={()=>handleFilterDelete(item.id)}>
                            <p>{item.name}</p>
                            <FontAwesomeIcon icon={faXmark}/>
                        </li>
                    );
                })
            }
        </ul>
    </div>
  )
}

export default Filters