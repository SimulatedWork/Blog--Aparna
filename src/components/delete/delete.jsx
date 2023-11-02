import React from "react";
import "../delete/delete.css";
import Blogs from "../blogs/blogs";
import BlogDisplay from "../blogDisplay/blogDisplay";


function DeleteConfirmationModal({ onDelete, onCancel }) {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <p>Are you sure you want to delete this blog post?</p>
          <div className="button">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
      <div id="backgroundBlur"></div>
    </>
  );
}

export default DeleteConfirmationModal;





