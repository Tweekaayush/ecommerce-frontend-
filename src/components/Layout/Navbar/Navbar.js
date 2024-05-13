import React, { useEffect, useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalProducts } from '../../../features/cartSlice'
import {selectUserId, selectUserPhoto} from '../../../features/userSlice'
import UserOptions from './UserOptions'

const Navbar = ({cartStatus, setCartStatus}) => {

  const navigate = useNavigate()
  const [scroll, setScroll] = useState(false)
  const totalProducts = useSelector(selectTotalProducts)
  const userId = useSelector(selectUserId)
  const photo = useSelector(selectUserPhoto)

 const handleScroll = ()=>{
    if(window.scrollY > 0) 
        setScroll(true);
    else{
        setScroll(false)
    } 
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div id="page-overlay" className={cartStatus?'page-overlay-active':''} onClick={()=>setCartStatus(false)}></div>
      <nav className={scroll?'navbar scrolled':'navbar'}>
        <div className="nav-container">
          <Link to="/" className="nav-brand">Ecommerce</Link>
          <ul className={scroll?'nav-links nav-active':'nav-links'}>
            <li className="nav-item" onClick={() => navigate('/browse')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Browse</p>
            </li>
            <li className="nav-item" onClick={()=>setCartStatus(true)}>
              <FontAwesomeIcon icon={faCartShopping}/>
              <p>Cart</p>
              {
                totalProducts ? <span className='nav-item-products-length'>{totalProducts}</span>:''
              }
            </li>
            {
              userId? (
                <li className="nav-item">
                  <UserOptions photo={photo}/>
                </li>
              ):(
                <li className="nav-item" onClick={() => navigate('/login')}>
                  <FontAwesomeIcon icon={faUser} />
                  <p>Account</p>
                </li> 
              )
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar