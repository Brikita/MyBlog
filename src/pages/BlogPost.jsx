import React, { useState } from 'react';
import "./blog.css"
import { Link } from 'react-router-dom';


const BlogPost = ({title, content, image ,blogId}) => {
  const [comment, setComment] = useState('');

  const handleLikeClick = () => {
    onLike(post.id);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onAddComment(post.id, comment);
      setComment('');
    }
  };

  return (
    
      <div className="blog-post">
      <Link to={`/:id/${blogId}/comments`}>{title} </Link>
      {image && <img src={image} alt="Blog Post" />}
      <p>{content}</p>
      

    </div>
  );
};

export default BlogPost; 
