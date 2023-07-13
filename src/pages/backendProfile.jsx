import React from "react";
import http from "../lib/http";
import { Link } from "react-router-dom";

const backendProfile = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    async function fetchBlogs() {
      const { data } = await http.get("/api/user/blogs/Brian Kinyua");
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  console.log(blogs);

  //console.log(blog);
  return (
    <div className='my-blogs-container' >
      {blogs.map((blog) => {
        return (
        <div key={blog._id} className='blog-container'>
            <div className='blog-title'>
                <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
            </div>
            <div className='blog-author' >{blog.author}    <span className='blog-date'>{blog.createdAt}</span></div>
        </div>)
      })}
    </div>
  );
};

export default backendProfile;
