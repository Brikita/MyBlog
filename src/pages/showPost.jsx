
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "../lib/http";
import './createBlog.css'
import { useForm } from 'react-hook-form';



/* 
export default function ShowPost() {
  const { blogId: blogId } = useParams();
  const [blog, setBlog] = React.useState({});
  const navigate = useNavigate();

  const[comment, setComment] = React.useState([])

  React.useEffect(() => {
    async function fetchBlog() {
      const { data } = await http.get(`/api/user/${blogId}`);
      setBlog(data)
      setComment(data.comments)
    }
    fetchBlog();
  }, [blogId]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ author, content }) => {
    const payload = {
      author,
      content,
    };
    await http.post(`/api/user/blogs/${blogId}/comments`, { data: payload });
  };

  console.log(blog);
  console.log(blogId);
  console.log(comment)

  return (
    <div className="edit-blog">
      <h1 className="blog-title">{blog.title}</h1>
      {blog.tags?.map((tag) => <span key={Math.random()} className="blog-tags"> {tag} </span>)}
      <div className="blog-content">{blog.content}</div>
      <div>{blog.author} <span>{blog.createdAt}</span></div>
      <div className="comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="author">
            <input
              placeholder="your Name"
              type="text"
              name="author"
              id="author"
              {...register("author")}
            />
          </label>
          <label htmlFor="content">
            <input
              placeholder="your Title"
              type="text"
              name="content"
              id="content"
              {...register("content")}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comments">
        <h3>comment</h3>
          
        {/*  {!blog.comments.length?blog.comments.map((comment, index) => (
          <p key={index}>{comment.content}</p>
        )): <p>No comments</p> }  
    
    
    // </div>

    //</div>
 // );
//}
 */
export default function ShowPost() {
  const { blogId } = useParams();
  const [blog, setBlog] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchBlog() {
      const { data } = await http.get(`/api/user/${blogId}`);
      setBlog(data);
    }
    fetchBlog();
  }, [blogId]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ author, content }) => {
    const payload = {
      author,
      content,
    };
    await http.put(`/api/user/blogs/${blogId}/comments`, { data: payload });
  };

  return (
    <div className="edit-blog">
      <h1 className="blog-title">{blog.title}</h1>
      {blog.tags?.map((tag) => (
        <span key={tag} className="blog-tags">
          {tag}
        </span>
      ))}
      <div className="blog-content">{blog.content}</div>
      <div>
        {blog.author} <span>{blog.createdAt}</span>
      </div>
      <div className="comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="author">
            <input
              placeholder="your Name"
              type="text"
              name="author"
              id="author"
              {...register("author")}
            />
          </label>
          <label htmlFor="content">
            <input
              placeholder="your Title"
              type="text"
              name="content"
              id="content"
              {...register("content")}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <p key={index}>{comment.content}</p>
          ))
        ) : (
          <p>No comments</p>
        )}
      </div>
    </div>
  );
}
