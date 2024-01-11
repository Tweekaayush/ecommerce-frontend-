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
  const [validationError, setValidationError] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }
  
  const handleCheck = (e) =>{
    const { name, checked } = e.target;
    setFormData({...formData, [name]: checked})
  }


  const validateForm = () =>{
    let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const { email, password } = formData
    const obj = {
      email: '',
      password: '',
    }
    if( !(emailRegex.test(email))){
      obj.email = 'Please enter a valid email address!'
    }
    if(password.length < 4){
      obj.password = 'Password length must be more than 4 letters!'
    }

    setValidationError(obj)

    if(obj.email !== '' || obj.password !== '')
      return false
    return true
  }

  const submitHandler = (e) =>{
    e.preventDefault();

    if(validateForm()){      
      setFormData({
        email: '',
        password: '',
        remember: false
      })
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section id="login">
      <div className="container">
        <div className="form-container">
          <form onSubmit={submitHandler} className="login-form">
            <h1 className='form-heading'>Login</h1>
            <div className="form-input">
              <FontAwesomeIcon icon={faEnvelope}/>
              <input type="email" value={formData.email} name='email' onChange={handleChange} placeholder='Email' required/>
            </div>
            <h6 className="validation-error-message">{validationError.email}</h6>
            <div className="form-input">
              <FontAwesomeIcon icon={faKey}/>
              <input type="password" value={formData.password} name='password' onChange={handleChange} placeholder='Password' required/>
            </div>
            <h6 className="validation-error-message">{validationError.password}</h6>
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