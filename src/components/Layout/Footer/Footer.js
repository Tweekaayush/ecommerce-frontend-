import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [email, setEmail] = useState('')
  const [year, setYear] = useState()

  const getYear = () =>{
    setYear(new Date().getFullYear())
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setEmail('')
  }

  useEffect(()=>{
    getYear()
  }, [])

  return (
    <footer>
      <div className="upper-footer">
        <p>Stay up to date! We send out a newsletter twice a week with our latest news.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
          <input type="submit" value="subscribe" />
        </form>
      </div>
      <div className="middle-footer">
        <div>
          <div className="footer-about">
            <h1 className="footer-brand">Ecommerce</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem. Sed fugit dignissimos voluptas doloremque!
            </p>
          </div>
        </div>
        <div>
          <div className='footer-services'>
            <h2 className='footer-link-heading'>Customer Service</h2>
            <ul>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='footer-category-links'>
            <h2 className='footer-link-heading'>Popular Categories</h2>
            <ul>
              <li>
                <Link to="/browse/furniture">Furniture</Link>
              </li>
              <li>
                <Link to="/browse/electronic">Electronics</Link>
              </li>
              <li>
                <Link to="/browse/lamp">Lamps</Link>
              </li>
              <li>
                <Link to="/browse/chair">Chairs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='footer-social-links'>
            <h2 className='footer-link-heading'>Keep in touch!</h2>
            <ul>
              <li>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com">
                  <FontAwesomeIcon icon={faPinterest} /> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-footer">
          <p className="copyright">
            Copyright {year} &copy; All rights Reserved
          </p>
      </div>
    </footer>
  )
}

export default Footer