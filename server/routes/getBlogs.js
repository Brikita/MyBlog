const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs.js');


router.get('/blogs/:author', async (req, res, next) => {
  try {
    const author = req.params.author;
     // Fetch blogs for the specified author
    const blogs = await Blog.find({ author });
     res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
});
 module.exports = router;