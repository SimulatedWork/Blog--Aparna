import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeftCircle } from "react-icons/hi2";
import "./createForm.css";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [body, setBodyText] = useState("");
  const [conclusion, setConclusionText] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();


  const handleTextareaChange = (event) => {
    setIntro(event.target.value);
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


     // Make a POST request to the backend
    fetch("http://localhost:8000/api/insertBlog", {
      method: "POST",
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({
        title:title,
        intro:intro,
        body:body,
        conclusion:conclusion
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

}

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
              <textarea
                className="intro"
                placeholder="Introduction:"
                value={intro}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            <div id="body-div">
              <textarea
                className="body-text"
                placeholder="Body Text:"
                value={body}
                onChange={handleBodyTextChange}
              ></textarea>
            </div>
            <div id="conclusion-div">
              <textarea
                className="conclusion-text"
                placeholder="Conclusion:"
                value={conclusion}
                onChange={handleConclusionTextChange}
              ></textarea>
            </div>
          </div>
          <button className="done">
            <Link to="/blogs" onClick={handleDoneClick}>
              Done
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
