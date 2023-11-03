import React, {useState} from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Navbar2 from "../navbar2/navbar2";
import { AiFillDelete } from "react-icons/ai";
import dance1 from "../../assets/dance1.avif";
import "../blogDisplay/blogDisplay.css";
import DeleteConfirmationModal from "../Delete/delete";
import { useNavigate } from "react-router-dom";



function blogDisplay() {
//     const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();


    
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
              <h6>The Dance of Love: Embracing the Rhythm of the Heart</h6>
            </div>
            <div id="intro-container">
              <p className="intro-text">
                <b>Introduction:</b> Welcome to "Heartfelt Chronicles," a place
                where we explore the intricate facets of love and human
                connection. Today, we embark on a journey to unravel the beauty
                and complexity of love—the dance of emotions and the rhythm of
                the heart.
              </p>
              <div className="intro-container">
                <img src={dance1} className="profile-img"></img>
              </div>
            </div>
            <div id="body-text">
              <h2>Love: An Everlasting Melody</h2>
              <p>
                Love, often compared to a melodious tune, is a universal
                language that transcends boundaries. It's a melody that
                harmonizes souls, a rhythm that resonates in our hearts, and a
                timeless composition that enriches our lives.
              </p>
              <h2>The Dance Begins: Attraction and Connection</h2>
              <p>
                The dance of love commences with the spark of attraction and the
                magic of connection. It's that magnetic pull that draws two
                souls together, an unspoken understanding that kindles the
                flames of affection.
              </p>
            </div>
            <div id="conclusion-text">
              <p>
                <b>Conclusion:</b> A Symphony of Love Love, the symphony of our
                lives, is a masterpiece composed of small, significant moments.
                Embrace the dance, savor the melodies, and let your heart waltz
                to the rhythm of love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogDisplay;
