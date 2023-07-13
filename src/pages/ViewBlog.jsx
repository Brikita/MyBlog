import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import http from "../lib/http";

export default function ViewBlog(){
  const { id: blogId } = useParams();
  const [blog, setBlog] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchBlog() {
      const { data } = await http.get(`/api/user/${blogId}`);
      setBlog(data)
    } fetchBlog()
}, [blogId]);

const deletePost = async () => {
  await http.delete(`/api/user/deleteBlog/${blogId}`)
  navigate('/profile')
}

console.log(blog);
console.log(blogId);
  return (
  <div>
    <h1 className="blog-title">{blog.title}</h1>
    {blog.tags?.map((tag) => <span className="blog-tags"> {tag} </span>)}
    <div className="blog-content">{blog.content}</div>
    <div>{blog.author} <span>{blog.createdAt}</span></div>
    <div className="btn-container">
      <Link className="btn" to={`/blogs/:id/edit`}>Edit</Link>
      <button onClick={deletePost}>Delete</button>
    </div>
    <Link to="/profile">&#8592;  Back</Link>
  </div>
  );
}