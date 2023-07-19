const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

// import blog
const Blog = require("../models/blogs");

// middleware
app.use(bodyParser.json());

// delete function
router.delete("/deleteBlog/:blogId", async (req, res, next) => {
  const blogId = req.params.blogId

  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(200).json({
      message: "Deleted the blog",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete blog",
      error: err.message,
    });
  }
});


module.exports = router