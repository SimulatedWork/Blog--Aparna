import React from 'react';
import "./blogs.css";
import Navbar2 from '../navbar2/navbar2';
import { TfiThought } from "react-icons/tfi";
import { HiArrowLeftCircle } from "react-icons/hi2";
import dance1 from "../../assets/dance1.avif";
import dance2 from "../../assets/dance2.avif";
import dance3 from "../../assets/dance3.jpg";
import {BsArrowRightShort} from "react-icons/bs";


function blogs() {
  // fetch("http://localhost:8000/api/blog")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Data from the server:", data);

  //     // Update the DOM or perform other actions with the data
  //     const messageElement = document.createElement("p");
  //     messageElement.textContent = data.message;
  //     document.body.appendChild(messageElement);
  //   })
  //   .catch((error) => console.error("Error fetching data:", error));


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
            <div className="division">
              <div className="card1">
                <img src={dance1} alt="image" className="image"></img>

                <div className="thought-div">
                  <p className="thought">
                    “The Dance of Love: Embracing the Rhythm of the Heart”
                  </p>
                  <h4 className="author">-By Aparnaa</h4>
                  <a className="author" href="/blogDisplay">
                    <BsArrowRightShort />
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="division">
              <div className="card2">
                <img src={dance2} alt="image" className="image"></img>

                <div className="thought-div">
                  <p className="thought">
                    “The Dance of Love: Embracing the Rhythm of the Heart”
                  </p>
                  <h4 className="author">-By Aparnaa</h4>
                  <a className="author" href="/blogDisplay">
                    <BsArrowRightShort />
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="division">
              <div className="card3">
                <img src={dance3} alt="image" className="image"></img>

                <div className="thought-div">
                  <p className="thought">
                    “The Dance of Love: Embracing the Rhythm of the Heart”
                  </p>
                  <h4 className="author">-By Aparnaa</h4>
                  <a className="author" href="/blogDisplay">
                    <BsArrowRightShort />
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogs