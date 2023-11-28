import React from 'react'
import "./navbar2.css"
import Mainpage from '../mainpage/mainpage';
import { MdAccountCircle } from "react-icons/md";


function navbar2() {
  return (
    <nav className="nav2">
      <div className="logo" onClick={Mainpage} href="/">
        BlogBouquet
      </div>
      <div className="right2">
        <MdAccountCircle  className="nav-link" onClick={Mainpage} href="/profile" id="button" color='black' />
        
      </div>
    </nav>
  );
}

export default navbar2