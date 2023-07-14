import React from "react";
import http from "../lib/http";
import { Link } from "react-router-dom";

const MyBlogs = (props) => {
  const [blogs, setBlogs] = React.useState([]);
  
  React.useEffect(() => {
    async function fetchBlogs() {
      const { data } = await http.get(`/api/user/blogs/${props.userName}`);
      setBlogs(data);
    }
    fetchBlogs(); 
  }, []);
  console.log(blogs);

  //console.log(blog);
  return (
    <div className='blogs' >
      <h1>My Blogs</h1>
      <Link className="blogs-link new" to={'/Social-Blogging-App-2.0/new'}>New Blog</Link >
      {blogs.map((blog) => {
        return (
        <div key={blog._id} className='blog-container'>
            <div className='blog-title'>
                <Link className="blogs-link title" to={`/${blog._id}`}>{blog.title}</Link>
            </div>
            <div className='blog-author' >{blog.author}    <span className='blog-date'>{blog.createdAt}</span></div>
        </div>)
      })}
    </div>
  );
};

export default MyBlogs;
