import React from "react";
import { IoCreate } from "react-icons/io5";
import "../create/create.css";

function create() {
  const userLoggedIn = true;
  
  return (
    <div className="round">
      {userLoggedIn ? (
        <a href="/createForm">
          <IoCreate className="create" />
        </a>
      ) : (
        <a href="/register">
        </a>
      )}
    </div>
  );
}

export default create;
