import React from "react";
import "./navbar.css";
import Blogs from "../blogs/blogs";
import Register from "../register/register";
import Login from "../login/login";
import mainpage from "../mainpage/mainpage";

function Navbar() {
  return (
    <nav>
      <div className="logo" onClick={mainpage} >BlogBouquet</div>
      <div className="right">
        <a className="nav-link" onClick={Blogs} href="/blogs">
          Blogs
        </a>
        <a className="nav-link"  href="/Aboutus">
          About Us
        </a>
        <a className="nav-link" onClick={Login}  href="/login">
          Login
        </a>
        <button>
          <a className="nav-link" onClick={Register} href="/register" id="button">
            Register
          </a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
