import React from "react";
import "./navbar.css";
import Blogs from "../blogs/blogs";
import Register from "../register/register";
import Login from "../login/login";
import Mainpage from "../mainpage/mainpage";
import { FaBars } from "react-icons/fa"; 
import AboutUs from "../aboutUs/aboutUs";

function Navbar() {
  return (
    <nav className="nav1">
      <label className="logo" onClick={Mainpage} href="/">
        BlogBouquet
      </label>
      <div className="right">
        <a className="nav-link" onClick={Blogs} href="/blogs">
          Blogs
        </a>
        <a className="nav-link"  onClick={AboutUs} href="/aboutUs">
          About Us
        </a>
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
      <i>
        <FaBars />
      </i>
    </nav>
  );
}

export default Navbar;
