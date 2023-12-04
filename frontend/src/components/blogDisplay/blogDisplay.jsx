import React, { useState } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import dance1 from "../../assets/dance1.avif";
import "../blogDisplay/blogDisplay.css";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate, useLocation, Link } from "react-router-dom";

function BlogDisplay() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedIntro, setEditedIntro] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const [editedConclusion, setEditedConclusion] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const blogData = location.state;

  const handleDeleteClick = () => {
    console.log("Deleting blog with ID:", blogData.id);
    setShowDeleteConfirmation(true);
  };

  const handleDelete = async () => {
  try {
    const success = await deleteBlog(blogData.id);

    if (success) {
      navigate("/blogs");
    } else {
      console.log("Deletion failed");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};


  const handleEditClick = () => {
    setEditMode(true);
    setEditedTitle(blogData.title);
    setEditedIntro(blogData.intro);
    setEditedBody(blogData.body);
    setEditedConclusion(blogData.conclusion);
  };

  const saveEdits = () => {
    setEditMode(false);
    console.log("Edited Title:", editedTitle);
    console.log("Edited Intro:", editedIntro);
    console.log("Edited Body:", editedBody);
    console.log("Edited Conclusion:", editedConclusion);

    // Your save edits logic here
    fetch(`http://localhost:8000/api/blogs/${blogData.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: editedTitle,
        intro: editedIntro,
        body: editedBody,
        conclusion: editedConclusion,
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
  };
  

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setEditedIntro(e.target.value);
  };

  const handleBodyTextChange = (e) => {
    setEditedBody(e.target.value);
  };

  const handleConclusionTextChange = (e) => {
    setEditedConclusion(e.target.value);
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
                <a className="svg" onClick={handleEditClick}>
                  EDIT
                </a>
                <AiFillDelete className="svg" onClick={handleDeleteClick} />
              </div>
            </div>
          </div>
          {editMode ? (
            <>
              <div className="form">
                <div className="title-container">
                  <textarea
                    id="title"
                    placeholder="Title:"
                    onChange={handleTitleChange}
                    value={editedTitle}
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
                    value={editedIntro}
                    onChange={handleTextareaChange}
                  ></textarea>
                </div>
                <div id="body-div">
                  <textarea
                    className="body-text"
                    placeholder="Body Text:"
                    value={editedBody}
                    onChange={handleBodyTextChange}
                  ></textarea>
                </div>
                <div id="conclusion-div">
                  <textarea
                    className="conclusion-text"
                    placeholder="Conclusion:"
                    value={editedConclusion}
                    onChange={handleConclusionTextChange}
                  ></textarea>
                </div>
              </div>
              <button className="done">
                <Link to="/blogs" onClick={saveEdits}>
                  Done
                </Link>
              </button>
            </>
          ) : (
            <>
              <div className="form">
                <div className="title-container" key={blogData.id}>
                  <b>TITLE: </b>
                  <h6>"{blogData.title}"</h6>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogDisplay;
