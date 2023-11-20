import React from 'react'
import Navbar from '../navbar/navbar'
import "./login.css"
import loginimg from "../../assets/login.png"
import register from "../register/register"
import { useState } from 'react'

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const token = authService.login(email, password);
    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/mainpage2";
    } else {
      console.error("Login failed");
    }
  };
  return (
    <>
      <Navbar />
      <div className="cover">
        <div className="cover-left-login">
          <img src={loginimg} className="loginimg" />
        </div>
        <div className="cover-right-login">
          <h1>LOGIN</h1>
          <div className="display-login">
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit" onClick={handleLogin}>
              LOGIN
            </button>
            <p>
              If you dont have an account?
              <a href="/register" onClick={register}>
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default login