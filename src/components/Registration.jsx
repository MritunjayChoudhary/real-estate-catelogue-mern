import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [userData,SetUserData] = useState({"email":"","password":"","confPassword":""})

  const navigate = useNavigate();

  const updateUserData = (e,type) => {
    if(type == "email"){ 
      SetUserData((prev) => {return {...prev,['email']:e.target.value}})
    }else if(type == "pass"){
      SetUserData((prev) => {return {...prev,['password']:e.target.value}})
    }else if(type == "confPass"){
      SetUserData((prev) => {return {...prev,['confPassword']:e.target.value}})
    }
  }
  const registarUser = async()=> {
    if(userData.email.trim() == "" ){
      return alert("email can not be empty !")
    }
    if(userData.password.trim() == "" || userData.confPassword.trim() == ""){
      return alert("password can not be empty !")
    }
    if( userData.password.trim() != userData.confPassword.trim()){
      return alert("password should be same !")
    }
    const data = userData
    try{
      const res = await axios.post(`${window.location.origin}/api/auth/register`,data);
      const resData = await res.data;
      if(res.status == 200 && resData?.userId){
        localStorage.setItem("authToken",resData.token)
        localStorage.setItem("user",resData.emailId)
        alert("Successfully registered User !!", "UserId => ",res.data.userId)
        navigate("/login")
      }else{
        alert("userid not found !")
      }
    }catch(err){
      // console.log(err.response)
      localStorage.removeItem("authToken")
      localStorage.removeItem("user")
      if(err?.response?.status == 400){
        alert(err.response.data.message)
      }else{
        alert(err)
      }
    }
  }
  // console.log(userData)
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="logo_head">
          <span>Logo</span>
        </div>
        <div className="logo-text">
          <span>Create New Account</span>
        </div>
        <div className="input_fields">
          <input className="inp" placeholder="Enter Email Id" onChange={(e)=>updateUserData(e,"email")}/>
          <input className="inp" placeholder="Enter Password" onChange={(e)=>updateUserData(e,"pass")}/>
          <input className="inp" placeholder="Confirm Password" onChange={(e)=>updateUserData(e,"confPass")}/>
        </div>
        <div className="signin_btn">
          <button onClick={()=>registarUser()}>Sign Up</button>
        </div>
      </div>
      <div className="footer_text">
        <Link to="/" className="signup_new">Sign In</Link>
      </div>
    </div>
  )
}

export default Registration;
