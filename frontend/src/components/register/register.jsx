import React from "react";
import Navbar from "../navbar/navbar";
import "./register.css";
import loginimg from "../../assets/login.png";
import Login from "../login/login";

function login() {
  
  return (
    <>
      <Navbar />
      <div className="cover">
        <div className="cover-left">
          <h1>REGISTER</h1>
          <div className="display">
            <input placeholder="Name" type="name"></input>
            <input placeholder="Email Address" type="email"></input>
            <input placeholder="Password" type="password"></input>
            <input placeholder="Confirm Password" type="password"></input>

            <button className="submit">
              <a href="/mainpage2">Submit</a>
            </button>
            <p>
              Already have an account?
              <a href="/login" onClick={Login}>
                Login
              </a>
              .
            </p>
          </div>
        </div>
        <div className="cover-right">
          <img src={loginimg} className="loginimg" />
        </div>
      </div>
    </>
  );
}

export default login;
