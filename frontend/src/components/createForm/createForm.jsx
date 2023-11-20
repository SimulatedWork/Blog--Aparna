import React, { useState } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import "./createForm.css";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [bodyText, setBodyText] = useState("");
  const [conclusionText, setConclusionText] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();


  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBodyTextChange = (event) => {
    setBodyText(event.target.value);
  };

  const handleConclusionTextChange = (event) => {
    setConclusionText(event.target.value);
  };

   const handleDeleteClick = () => {
     setShowDeleteConfirmation(true);
   };

   const handleDelete = () =>{
    navigate("/blogs");
   }

   const handleCancelDelete = () => {
     setShowDeleteConfirmation(false);
   };

   const handleDoneClick = () => {
     // Prepare data to be sent to the backend
     const formData = new FormData();
     formData.append("message", message);
     formData.append("title", title);
     formData.append("profilePicture", profilePicture);
     formData.append("bodyText", bodyText);
     formData.append("conclusionText", conclusionText);

     // Make a POST request to the backend
     fetch("http://localhost:3000/auth/blog", {
       method: "POST",
       body: formData,
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("Data sent to the server:", data);
       })
       .catch((error) =>
         console.error("Error sending data to the server:", error)
       );
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
              <textarea
                id="title"
                placeholder="Title:"
                onChange={handleTitleChange}
                value={title}
              ></textarea>
            </div>
            <div id="intro-container">
              <textarea
                className="intro"
                placeholder="Introduction:"
                value={message}
                onChange={handleTextareaChange}
              ></textarea>
              {profilePicture ? (
                <div className="profile">
                  <img src={profilePicture} alt="Profile" />
                </div>
              ) : (
                <input
                  type="file"
                  id="profile-pic"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              )}
            </div>
            <div id="body-div">
              <textarea
                className="body-text"
                placeholder="Body Text:"
                value={bodyText}
                onChange={handleBodyTextChange}
              ></textarea>
            </div>
            <div id="conclusion-div">
              <textarea
                className="conclusion-text"
                placeholder="Conclusion:"
                value={conclusionText}
                onChange={handleConclusionTextChange}
              ></textarea>
            </div>
          </div>
          <button className="done">
            <a href="/blogs" onClick={handleDoneClick}>Done</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
