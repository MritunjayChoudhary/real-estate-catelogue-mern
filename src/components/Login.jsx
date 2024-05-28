import "./Login.css";
import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const URL = `${window.location.origin}/api/auth/register`;

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL,{method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(user)});
      console.log("login",response);
      if(response.ok){
        alert("Login sucessfull")
        const res_data = await response.json();
        storeTokenInLS(res_data.token)
        setUser({
          username: "",
          password: "",
        });
        navigate("/")
      }else{
        alert("Invalid credentials");
        console.log("Invalid credentials");
      }
      }
     catch (error) {
      console.log("login",error)
    }
    console.log(user);
  };


  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="logo_head">
          <span>Logo</span>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="logo-text">
          <span>Enter your credentials to access your account</span>
        </div>
        <div className="input_fields">
          <input      className="inp" 
                      placeholder="Enter User Id"
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput} />
          <input      className="inp" 
                      placeholder="Enter password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}/>
        </div>
        <div className="signin_btn">
          <button>Sign In</button>
        </div>
        </form>
        <div className="signup-btn">
        <Link to="/signup" ><button>Sign Up</button></Link>
        </div>
      </div>
      <div className="footer_text">
        <span className="text">Don’t have an account?</span>
        <Link to="/signup" className="signup_new">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
