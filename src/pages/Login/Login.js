import React from 'react'
import './Login.css'
import fb from '../../assets/svg/facebook.png'
import g from '../../assets/svg/google.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="form-container">
          <form action="" className="login-form">
            <h1 className='form-heading'>Login</h1>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <span>
              <input type="checkbox" name="rememberme" id="" />
              <label for="rememberme">Remember Me</label>
            </span>
            <input type="submit" value="Login" />
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