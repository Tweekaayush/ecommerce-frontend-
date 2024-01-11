import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [email, setEmail] = useState('')

  return (
    <footer>
      <div className="upper-footer">
        <div className="upper-footer-content">
          <p>Stay up to date! We send out a newsletter twice a week with our latest news.</p>
          <form action="">
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'/>
            <input type="submit" value="subscribe" />
          </form>
        </div>
      </div>
      <div className="middle-footer">
        <div className="middle-footer-content">
          <div>
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
          <div>
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
          <div>
            <h2 className='footer-link-heading'>Keep in touch</h2>
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
        <div className="lower-footer-content">
          <p className="copyright">
            Copyright &copy; All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer