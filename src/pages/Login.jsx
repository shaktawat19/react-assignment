import React, { useState } from "react";
import "../App.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-row">
      <div className="left column">
        <h1 className="title">Board.</h1>
      </div>
      <div className="right column">
        <div className="main">
          <div className="top">
            <h1 className="heading">Sign In</h1>
            <p className="sub-heading">Sign in to your account</p>
          </div>
          <div className="middle">
              <GoogleOAuthProvider clientId="325374326711-ce3kdqdhnksm783k1it0uud2enphvibr.apps.googleusercontent.com">
                <GoogleLogin 
                  onSuccess={(credentialResponse) => {
                    const details = jwt_decode(credentialResponse.credential);
                    navigate('/dashboard');
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
          </div>
          <div className="bottom">
            <form action="" onSubmit={submitHandler}>
              <div className="mail">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <label htmlFor="passw">Password</label>
                <input
                  type="text"
                  name="passw"
                  id="passw"
                  value={passw}
                  onChange={(e) => setPassw(e.target.value)}
                />
              </div>

              <div>
                <p>Forgot Password ?</p>
                <button type="submit">Sign In</button>
              </div>
            </form>
            <div>
              <span className="one">Don't have an account?</span>
              <span className="two">Register here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
