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
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <section>
      <Navbar className="navbar" /> 
      <div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/editProfile/:id"
            element={<EditProfile />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/myblogs" element={<MyBlogs />} />
          <Route path="/:id" element={<ViewBlog />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/new" element={<CreateBlog />} />
        </Routes>
      </div>
    </section>
  );
}
