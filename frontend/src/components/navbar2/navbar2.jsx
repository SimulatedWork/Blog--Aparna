import React from 'react'
import "./navbar2.css"
import Mainpage from '../mainpage/mainpage';


function navbar2() {
  return (
    <nav className='nav2'>
      <div className="logo" onClick={Mainpage} href="/">
        BlogBouquet
      </div>
      <div className="right2">
        <button>
          <a
            className="nav-link"
            onClick={Mainpage}
            href="/"
            id="button"
          >
            LOGOUT
          </a>
        </button>
      </div>   
    </nav>
  );
}

export default navbar2