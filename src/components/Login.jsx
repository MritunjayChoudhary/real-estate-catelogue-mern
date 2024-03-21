import "./Login.css";
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="form_container">
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
          <button>Sign Up</button>
        </div>
      </div>
      <div className="footer_text">
        <span className="text">Don’t have an account?</span>
        <span className="signup_new">Sign Up</span>
      </div>
    </div>
  );
};

export default Login;
