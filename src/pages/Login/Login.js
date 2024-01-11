import React, { useState, useEffect } from 'react'
import './Login.css'
import fb from '../../assets/svg/facebook.png'
import g from '../../assets/svg/google.png'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const Login = () => {


  const { pathname } = useLocation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }
  
  const handleCheck = (e) =>{
    const { name, checked } = e.target;
    setFormData({...formData, [name]: checked})
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section id="login">
      <div className="container">
        <div className="form-container">
          <form action="" className="login-form">
            <h1 className='form-heading'>Login</h1>
            <div className="form-input">
              <FontAwesomeIcon icon={faEnvelope}/>
              <input type="email" value={formData.email} name='email' onChange={handleChange} placeholder='Email'/>
            </div>
            <div className="form-input">
              <FontAwesomeIcon icon={faKey}/>
              <input type="password" value={formData.password} name='password' onChange={handleChange} placeholder='Password'/>
            </div>
            <span>
              <input type="checkbox" id='remember' name="remember" onChange={handleCheck} />
              <label htmlFor="remember">Remember Me</label>
            </span>
            <input type="submit" value="Login" className='section-btn' />
            <p>Or login with</p>
            <div className="form-auth">
              <div className="form-links">
                <img src={fb} alt="" />
                <h3>Facebook</h3>
              </div>
              <div className="form-links">
                <img src={g} alt="" />
                <h3>Google</h3>
              </div>
            </div>
            <p>Not a member? <Link to="/login">Sign up now</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login