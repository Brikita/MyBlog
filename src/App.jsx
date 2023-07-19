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
import ShowPost from "./pages/showPost"

export default function App() {
  return (
    <section>
      <Navbar className="navbar" /> 
      <div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/Social-Blogging-App-2.0/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Social-Blogging-App-2.0/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/Social-Blogging-App-2.0/profile/:id"
            element={<Profile />}
          />
          {/* <Route
            path="/Social-Blogging-App-2.0/editProfile/:id"
            element={<EditProfile />}
          /> */}
          <Route
            path="/editProfile/:id"
            element={<EditProfile />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Social-Blogging-App-2.0/signup" element={<Signup />} />
          <Route path="/profile/myblogs" element={<MyBlogs />} />
          <Route path="/Social-Blogging-App-2.0/profile/myblogs" element={<MyBlogs />} />
          <Route path="/Social-Blogging-App-2.0/:id" element={<ViewBlog />} />
          <Route path="/:id" element={<ViewBlog />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/Social-Blogging-App-2.0/profile/:id/edit" element={<Edit />} />
          <Route path="/Social-Blogging-App-2.0/new" element={<CreateBlog />} />
          <Route path="/Social-Blogging-App-2.0/:id/comment" element={<ShowPost />} />

        </Routes>
      </div>
    </section>
  );
}
