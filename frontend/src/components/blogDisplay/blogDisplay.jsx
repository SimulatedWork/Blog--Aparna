import React, { useState, useEffect } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import dance1 from "../../assets/dance1.avif";
import "../blogDisplay/blogDisplay.css";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate } from "react-router-dom";



function blogDisplay() {
const [blogData, setBlogData] = useState({});
const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
const navigate = useNavigate();

useEffect(() => {
  //getting the data from backend
  fetch("http://localhost:8000/api/insertBlogs")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setBlogData(blogData); // Assuming the data is an object representing a blog
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, []);


    
//   const showDeleteModal = () => {
//     setDeleteModalOpen(true);
//   };

//   const hideDeleteModal = () => {
//     setDeleteModalOpen(false);
//   };

   const handleDeleteClick = (event) => {
     setShowDeleteConfirmation(true);
   };

   const handleDelete = (event) => {
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
            <div className="title-container">
              <b>TITLE:</b>
              <h6>{blogData.title}</h6>
            </div>
            <div id="intro-container">
              <p className="intro-text">
                <b>Introduction:</b>
                {blogData.intro}
              </p>
              <div className="intro-container">
                <img src={dance1} className="profile-img"></img>
              </div>
            </div>
            <div id="body-text">
              <b>Body:</b>
              <p>{blogData.body}</p>
            </div>
            <div id="conclusion-text">
              <p>
                <b>Conclusion:</b>
                {blogData.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogDisplay;
