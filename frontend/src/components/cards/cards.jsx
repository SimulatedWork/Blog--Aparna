import React, { useState, useEffect } from "react";
import "./cards.css";
import dance1 from "../../assets/dance1.avif";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Cards() {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from the server:", data);
        setBlogData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="division">
        {blogData.map((blog) => (
          <div className="card1" key={blog.id}>
            <img src={dance1} alt="image" className="image"></img>

            <div className="thought-div">
              <p className="thought">"{blog.title}"</p>
              <a className="view" href="/blogDisplay" onClick={()=> navigate('/blogDisplay',{state : blog})}>
                <BsArrowRightShort />
                View
              </a>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
