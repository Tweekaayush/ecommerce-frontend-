import React, { useContext, useEffect, useState } from 'react'
import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../../context/ProductContext'

const Pagination = ({page, setPage, paginate}) => {

  const {productsLength} = useContext(ProductContext)
  const [totalPages, setTotalPages] = useState([])
  
  const style = {
    backgroundColor: '#222222',
    color: '#ffffff'
  }

  const prevPage = () =>{
    let cur = page-1
    if(page > 1)
      setPage(cur)
  }

  const nextPage = () =>{
    let cur = page+1
    if(page < (productsLength/paginate))
      setPage(cur)
  }


  useEffect(()=>{

    function func(){
      let newArr = []
      for(let i = 0; i < productsLength/paginate; i++){
        newArr.push(i+1)
      }
      setTotalPages(newArr)
    }
    func()

  },[productsLength, paginate])
  return (
    <div className="pagination">
        <FontAwesomeIcon icon={faAngleLeft} onClick={prevPage}/>
        {
          totalPages.map((i)=>{
            return (
              <p key={i} onClick={()=>setPage(i)} style={page === i? style:{}}>{i}</p>
            )   
          })
        }
        <FontAwesomeIcon icon={faAngleRight} onClick={nextPage}/>
    </div>
  )
}

export default Pagination