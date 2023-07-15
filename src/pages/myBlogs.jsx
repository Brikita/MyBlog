import React from "react";
import http from "../lib/http";
import { useParams,Link } from "react-router-dom";

const MyBlogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  const { id: userId } = useParams()
  const [users, setUsers] = React.useState({});


    React.useEffect(() => {
      async function fetchUser() {
        const { data } = await http.get(`/api/people/profile/${userId}`);
        setUsers(data)
      }
      fetchUser(); 
    }, []);
  
  React.useEffect(() => {
    async function fetchBlogs() {
      const { data } = await http.get(`/api/user/blogs/${users.username}`);
      setBlogs(data);
    }
    fetchBlogs(); 
  }, [users]);
  console.log(users.username);
  
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
