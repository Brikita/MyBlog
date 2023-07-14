import React from "react";
import Navbar from "./Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import EditProfile from "./components/EditProfile"
import Signup from "./pages/signup";
import { Route, Routes } from "react-router-dom";

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
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/Social-Blogging-App-2.0/profile"
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
        </Routes>
      </div>
    </section>
  );
}
