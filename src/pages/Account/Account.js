import React, { useEffect, useState } from 'react'
import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserEmail, selectUserName, selectUserPhoto } from '../../features/userSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { auth, updateProfile, updateEmail } from '../../config/firebase'
import { setUserLoginDetails } from '../../features/userSlice'

const Account = () => {

  const dispatch = useDispatch()
  const photo = useSelector(selectUserPhoto)
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: userName,
    // photo: photo
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    updateProfile(auth.currentUser, {
        displayName: formData.name,
        // photoURL: formData.photo
    }).then(()=>window.location.reload())
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
    if(!userName){
        navigate('/login')
    }
  }, [userName]) 
  return (
    <section>
        <div className="container">
            <div className="account-container">
                <div className="profile-header">
                    <h1 className=''>Profile</h1>
                </div>
                <div className="profile-content">
                    <div className="profile-content-left">
                        <div className="profile-img">
                            <img src={photo} alt="" />
                        </div>
                        <div className="profile-details">
                            <div>
                                <h1 className='section-heading'>Name</h1>
                                <p className='body-text'>{userName}</p>
                            </div>
                            <div>
                                <h1 className='section-heading'>Email</h1>
                                <p className='body-text'>{userEmail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-content-right">
                        <div className="section-heading">
                            <h1>Edit Profile</h1>
                            <FontAwesomeIcon icon={faPen} />
                        </div>
                        <form onSubmit={handleSubmit} className='account-form'>
                            <label htmlFor="">
                                <span>Name:</span>
                                <input type="text" value={formData.name} onChange={handleChange} placeholder={userName} name='name'/>
                            </label>
                            {/* <label htmlFor="">
                                <span>Photo:</span>
                                <input type="file" name="photo" accept='image/' onChange={handleChange}/>
                            </label> */}
                            <button type="submit" className='section-btn'>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Account