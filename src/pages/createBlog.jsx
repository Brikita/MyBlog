import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import http from "../lib/http";
import './createBlog.css' 



const createBlog = () => { 
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id: userId } = useParams()

  const onSubmit = async ({ title, author, tags, content, image }) => {
    const payload = {
      title,
      author,
      tags,
      content,
      image
    };
    await http.post("/api/user/createBlog", { data: payload });
    navigate(`/profile/${userId}`)
  };

  return (
    <div className="new-blog">
      <h1>Create your Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title"> Title 
          <input
            placeholder="your Title"
            type="text"
            name="title"
            id="title"
            {...register("title")}
          />
        </label>
        <label htmlFor="author"> Name 
          <input
            placeholder="your Name"
            type="text"
            name="author"
            id="author"
            {...register("author")}
          />
        </label>
        <label htmlFor="tags"> Tags 
          <input
            placeholder='Please input the tags separate them with a ","'
            type="text"
            name="tags"
            id="tags"
            {...register("tags")}
          />
        </label>
        <label htmlFor="image"> Image address 
          <input
            placeholder='Input the image address to your image'
            type="text"
            name="image"
            id="image"
            {...register("image")}
          />
        </label>
        <label htmlFor="content"> 
          <textarea
            placeholder="your Content..."
            type="text"
            name="content"
            id="content"
            {...register("content")}
          />
        </label>
        <button type="submit">Post</button>
      </form>

      {/* <Link to="/profile">&#8592; Back</Link> */}
    </div>
  );
};

export default createBlog;
