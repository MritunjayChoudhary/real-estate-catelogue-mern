import "./Login.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="logo_head">
          <span>Logo</span>
        </div>
        <div className="logo-text">
          <span>Enter your credentials to access your account</span>
        </div>
        <div className="input_fields">
          <input className="inp" placeholder="Enter User Id" />
          <input className="inp" placeholder="Enter password" />
        </div>
        <div className="signin_btn">
          <button>Sign In</button>
        </div>
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
