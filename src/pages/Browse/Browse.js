import React from 'react'
import './Browse.css'
import Filters from '../../components/Filters/Filters'
import BrowseProducts from '../../components/BrowseProducts/BrowseProducts'

const Browse = () => {
  return (
    <section id="browse">
      <div className="container">
        <div className="browse-container">
          <Filters/>
          <BrowseProducts/>
        </div>
      </div>
    </section>
  )
}

export default Browse