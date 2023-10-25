import React from "react";
import Navbar2 from "../navbar2/navbar2";
import "./register.css";
import loginimg from "../../assets/login.png";

function login() {
  return (
    <>
      <Navbar2 />
      <div className="cover">
        <div className="cover-left">
          <h1>REGISTER</h1>
          <div className="display">
            <input placeholder="First Name"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Email Address"></input>
            <input placeholder="Password"></input>
            <button className="submit">Submit</button>
            <p>Already have an account? Login.</p>
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
