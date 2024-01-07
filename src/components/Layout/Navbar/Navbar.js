import React, {useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [search, setSearch] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <nav className="navbar">
      <a href="/" className="nav-brand">Ecommerce</a>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" name="searchBar" id="searchBar" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <input type="submit" value="Go"/>
      </form>
      <ul className="nav-links">
        <li className="nav-item">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
      </ul>
      <div className="nav-toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar