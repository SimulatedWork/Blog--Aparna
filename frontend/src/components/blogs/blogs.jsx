import React from 'react';
import "./blogs.css";
import Navbar2 from '../navbar2/navbar2';
import { TfiThought } from "react-icons/tfi";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Cards from '../cards/cards';


function blogs() {
  return (
    <>
      <Navbar2 />
      <div className="header">
        <h1 className="blog-header">
          <a href='/mainpage2'><HiArrowLeftCircle  className='arrow' /> </a>
          <div>
            <TfiThought />
            "Here are the thoughts of our open mind."
            <TfiThought />
          </div>
        </h1>
        <div className="cards">
          <div id="card-display">
            <Cards/>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogs;