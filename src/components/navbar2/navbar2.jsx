import React from 'react'
import "./navbar2.css"
import mainpage from '../mainpage/mainpage';
import Login from '../login/login';
import Register from "../register/register";

function navbar2() {
  return (
    <nav>
      <div className="logo" onClick={mainpage} href="/mainpage">
        BlogBouquet
      </div>
      <div className="right">
        <a className="nav-link" onClick={Login} href="/login">
          Login
        </a>
        <button>
          <a
            className="nav-link"
            onClick={Register}
            href="/register"
            id="button"
          >
            Register
          </a>
        </button>
      </div>
    </nav>
  );
}

export default navbar2