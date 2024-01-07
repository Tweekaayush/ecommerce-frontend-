import React, {useState} from 'react'
import './Footer.css'

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
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='footer-link-heading'>Popular Categories</h2>
            <ul>
              <li>
                <a href="/">Category</a>
              </li>
              <li>
                <a href="/">Category</a>
              </li>
              <li>
                <a href="/">Category</a>
              </li>
              <li>
                <a href="/">Category</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='footer-link-heading'>Keep in touch</h2>
            <ul>
              <li>
                <a href="/">IN</a>
              </li>
              <li>
                <a href="/">FB</a>
              </li>
              <li>
                <a href="/">GH</a>
              </li>
              <li>
                <a href="/">LN</a>
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