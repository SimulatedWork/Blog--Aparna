import React, { useState, useEffect } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import dance1 from "../../assets/dance1.avif";
import "../blogDisplay/blogDisplay.css";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate,useLocation } from "react-router-dom";

function BlogDisplay() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const blogData = location.state;
  

  const handleDeleteClick = (event) => {
    setShowDeleteConfirmation(true);
  };

  const handleDelete = (event) => {
    // Perform delete logic, for now, just navigate back to "/blogs"
    navigate("/blogs");
  };

  const handleCancelDelete = (event) => {
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      {showDeleteConfirmation && (
        <DeleteConfirmationModal
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
        />
      )}
      <Navbar2 />
      <div className="base">
        <div className="display">
          <div className="icon-bar">
            <div className="icon">
              <a href="/blogs">
                <HiArrowLeftCircle className="svg" />
              </a>
              <div className="right-icon">
                <AiFillDelete className="svg" onClick={handleDeleteClick} />
              </div>
            </div>
          </div>
          <div className="form">
            <div className="title-container" key={blogData.id}>
              <b>TITLE: </b>
              <h6> "{blogData.title}"</h6>
            </div>
            <div id="intro-container">
              <div className="intro-container">
                <img src={dance1} alt="profile" className="profile-img" />
              </div>
              <p className="intro-text">
                <b>Introduction:</b>
                <p>{blogData.intro}</p>
              </p>
            </div>
            <div id="body-text">
              <b>Body:</b>
              <p>{blogData.body}</p>
            </div>
            <div id="conclusion-text">
              <b>Conclusion:</b>
              <p>{blogData.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDisplay;
