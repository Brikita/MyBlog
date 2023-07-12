const express = require("express");
const router = express.Router();

const Blog = require("../models/blogs");

router.post("/createPost", async (req, res, next) => {
  const { title, author, content, tags } = req.body;

  const BlogPost = new Blog({
    title,
    author,
    content,
    tags,
  });

  await Blog.save();

  return;
  res.status(201).json({
    message: "Created the Blog",
    data: { BlogPost },
  });
});

module.exports = router