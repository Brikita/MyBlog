import React from "react";
import http from "../lib/http";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import './createBlog.css' 

const Edit = () => {
  const { blogId: blogId } = useParams();
  const { id: userId } = useParams()
  //let blog
  const navigate = useNavigate(); 
  const { register, handleSubmit, reset } = useForm();
  React.useEffect(() => {
    async function fetchBlog() {
      const { data } = await http.get(`/api/user/${blogId}`);
      reset(data);
      //blog = data
    }
    fetchBlog();
  }, [blogId, reset]);
  //console.log(blog);
  const onSubmit = async ({ title, author, tags, content }) => {
    const payload = {
      title,
      author,
      tags,
      content,
    };
    await http.put(`/api/user/updateBlog/${blogId}`, { data: payload });
    navigate(`/profile/${userId}/${blogId}`);
  };

  return (
    <div className="edit-blog">
      <h1>Edit your Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">
          <input
            placeholder="your Title"
            type="text"
            name="title"
            id="title"
            {...register("title")}
          />
        </label>
        <label htmlFor="author">
          <input
            placeholder="your Name"
            type="text"
            name="author"
            id="author"
            {...register("author")}
          />
        </label>
        <label htmlFor="tags">
          <input
            placeholder='Please input the tags separate them with a ","'
            type="text"
            name="tags"
            id="tags"
            {...register("tags")}
          />
        </label>
        <label htmlFor="content">
          <input
            placeholder="your Content..."
            type="text"
            name="content"
            id="content"
            {...register("content")}
          />
        </label>
        <button type="submit">Save</button>
      </form>

      <Link to={`/profile/${userId}`}>&#8592; Back</Link>
    </div>
  );
};

export default Edit;
 