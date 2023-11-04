import React from "react";
import { IoCreate } from "react-icons/io5";
import "../create/create.css";
import CreateForm from "../CreateForm/createForm";

function create() {
  
  return (
    <div className="round">
      <a href="/createForm">
        <IoCreate className="create" />
      </a>
    </div>
  );
}

export default create;
