import React from 'react'
import Navbar2 from '../navbar2/navbar2'
import "./login.css"
import loginimg from "../../assets/login.png"

function login() {
  return (
    <>
      <Navbar2 />
      <div className="cover">
        <div className="cover-left-login">
          <img src={loginimg} className="loginimg" />
        </div>
        <div className="cover-right-login">
          <h1>LOGIN</h1>
          <div className="display-login">
            <input placeholder="Email Address"></input>
            <input placeholder="Password"></input>
            <button className="submit">LOGIN</button>
            <p>If you dont have an account? Register </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default login