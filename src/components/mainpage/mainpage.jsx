import React from 'react'
import Navbar from '../navbar/navbar'
import "./mainpage.css";
import mainpgImage from "../../assets/mainpg-img.png";

function mainpage() {
  return (
    <div className="maindiv">
      <Navbar />
      <div className="mainpage_div">
        <div id="maininfo">
          <>
            <header>
              Welcome to <b>BlogBouquet</b> Where Your Words Matter!
            </header>
            <p id='smalldesc'>
              Discover Your Voice, Share Your Passion, and Connect with a Global
              Audience.
            </p>
            <hr/>
          </>
          <p id="descrption">
            "<b>BlogBouquet</b> is a vibrant and user-friendly blogging platform
            that empowers individuals to express themselves, share their
            expertise, and connect with a diverse audience. Whether you're a
            seasoned blogger or just starting out, we provide the tools and
            community to help you succeed."
          </p>
        </div>
        <img src={mainpgImage} alt="image" className="mainimg"></img>
      </div>
    </div>
  );
};

export default mainpage;