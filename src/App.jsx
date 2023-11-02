import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/mainpage";
import Blogs from "./components/blogs/blogs";
import Login from './components/login/login';
import Register from "./components/register/register"
import AboutUs from "./components/aboutUs/aboutUs";
import Mainpage2 from "./components/Mainpage2/mainpage2";
import CreateForm from "./components/CreateForm/createForm";
import Create from "./components/create/create.jsx";
import BlogDisplay from "./components/blogDisplay/blogDisplay";
import Delete from "./components/Delete/delete";

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
          <Route path="/blogDisplay" element={<BlogDisplay/>}/>
          <Route path="/delete" element={<Delete/>} />
        </Routes>
      </Router>
      {shouldRenderCreate ?<></> : <Create/>}
    </>
  );
}

export default App;
