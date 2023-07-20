const express = require("express");
const router = express.Router();
const Blog = require("../models/blogs");

router.patch("/blogs/:id/comments", async (req, res) => {
  const blogId = req.params.id;
  const {author, content} = req.body;
  const comment = {author, content}
  try {
    // Find the blog document by its ID
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Add the comment to the comments array
    blog.comments.push(comment);
    // Save the updated blog document
    const updatedBlog = await blog.save(); 

    res.status(201).json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
