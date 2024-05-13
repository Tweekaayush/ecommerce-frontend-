import React, { Fragment, useState } from 'react'
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import { selectUserName, setSignOutState } from '../../../features/userSlice';
import { auth, signOut } from '../../../config/firebase';

<FontAwesomeIcon icon={faRightFromBracket} />

const UserOptions = ({photo}) => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName)
  const [open, setOpen] = useState(false);
  const options = [
    {
      icon:<FontAwesomeIcon icon={faUser} />,
      name:"Profile",
      func: account
    },
    {
      icon:<FontAwesomeIcon icon={faRightFromBracket} />,
      name:"Logout",
      func: logoutUser
    }
  ]
  
  function account(){
    navigate("/account")
  }
  function logoutUser(){
    if(userName){
      signOut(auth).then(()=>{
          dispatch(setSignOutState())
      }).catch((e)=> console.log(e.message))
  }
  }


  return (
        <SpeedDial
        className='speedDial'
        ariaLabel='SpeedDial'
        sx={{ '& .MuiFab-primary': { width: '32px', height: '32px', minHeight: '10px' }}}
        onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        open={open}
        icon={<img
            className='speedDialIcon'
            src={photo}
            alt="Profile"
        />
      }
        direction="down"
        >
          {
            options.map((option)=>(
              <SpeedDialAction sx={{width: '32px', height: '32px', minHeight: '10px'}} key={option.name} icon={option.icon} tooltipTitle={option.name} onClick={option.func}></SpeedDialAction>
            ))
          }
        </SpeedDial>
  )
}

export default UserOptions