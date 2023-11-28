import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "../src/components/mainpage/mainpage";
import Blogs from "../src/components/blogs/blogs";
import Login from "../src/components/login/login";
import Register from "../src/components/register/register";
import AboutUs from "../src/components/aboutUs/aboutUs";
import Mainpage2 from "../src/components/Mainpage2/mainpage2";
import CreateForm from "../src/components/createForm/createForm";
import Create from "../src/components/create/create";
import BlogDisplay from "../src/components/blogDisplay/blogDisplay";
import Delete from "../src/components/Delete/delete";
import Profile from "./components/profile/profile";

const currentURL = window.location.href;
const shouldRenderCreate = currentURL.includes(
    "http://localhost:5173/createForm"
);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/mainpage2" element={<Mainpage2 />} />
          <Route path="/createForm" element={<CreateForm />} />
          <Route path="/blogDisplay" element={<BlogDisplay />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      {shouldRenderCreate ? <></> : <Create />}
    </>
  );
}

export default App;
