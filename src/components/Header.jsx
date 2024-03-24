import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css'

const Header = () => {
  const [userEmail,setUserEmail] = useState("")
  const [userId,setUserId] = useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    const user = localStorage.getItem("user") && localStorage.getItem("user")
    setUserEmail(user)
    setUserId(user)
    // if(!user){
    //   navigate("/");
    // }
  },[])
  const logout = ()=>{
    console.log("logout")
    // localStorage.removeItem('user')
    // localStorage.removeItem('AuthToken')
  }

  return (
    <div className='header-container'>
      <div className='user-name'>
        USER ID : {userId}
      </div>
      <div className='profile'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
          <div className='user-icon'>
            <span class="material-symbols-outlined">
              person
            </span>
          </div>
            <span className='profile'>{userEmail}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >Profile</Dropdown.Item>
            <Dropdown.Item href="#/" onClick={()=>logout()}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header