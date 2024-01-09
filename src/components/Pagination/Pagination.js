import React from 'react'
import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
  return (
    <div className="pagination">
        <FontAwesomeIcon icon={faAngleLeft}/>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <FontAwesomeIcon icon={faAngleRight}/>
    </div>
  )
}

export default Pagination