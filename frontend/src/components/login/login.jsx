import React from 'react'
import Navbar from '../navbar/navbar'
import "./login.css"
import loginimg from "../../assets/login.png"
import register from "../register/register"

function login() {
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
            <input placeholder="Email Address"></input>
            <input placeholder="Password"></input>
            <button className="submit">
              <a href='/mainpage2' >LOGIN</a>
            </button>
            <p>
              If you dont have an account?{" "}
              <a href="/register" onClick={register}>
                Register
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default login