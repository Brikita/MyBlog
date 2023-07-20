import React from "react";
import Navbar from "./Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import EditProfile from "./components/EditProfile"
import Signup from "./pages/signup";
import Edit from "./pages/edit"
import ViewBlog from "./pages/ViewBlog";
import CreateBlog from './pages/createBlog'
import MyBlogs from "./pages/myBlogs";
import { Route, Routes, useParams } from "react-router-dom";
import "../style.css"

import ShowPost from "./pages/showPost"

export default function App() {
  
  return (
    <section>
      
      <div>
        <Routes>
          <Route path="/:id" element={<Blog />} />
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/new" element={<CreateBlog />}></Route>
          <Route path="/profile/:id/:blogId/edit" element={<Edit />} />
          <Route path="/profile/:id/:blogId" element={<ViewBlog />} />

          <Route
            path="/editProfile/:id"
            element={<EditProfile />}
          />
          <Route path="/signup" element={<Signup />} />


          
         
          

          
          <Route path="/:id/:blogId/comments" element={<ShowPost />} />


          

        </Routes>
      </div>
    </section>
  );
}
