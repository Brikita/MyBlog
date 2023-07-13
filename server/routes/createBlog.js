const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// test my endpoint
const app = express();

const Blog = require("../models/blogs");

// use mmiddleware
app.use(bodyParser.json());

router.post("/createBlog", async (req, res, next) => {
  const { title, author, content, tags } = req.body;

  const BlogPost = new Blog({
    title,
    author,
    content,
    tags,
  });

  const savedBlog = await BlogPost.save();
  try {
    res.status(201).json({
      message: "Created the Blog",
      data: savedBlog,
    });

    console.log(savedBlog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Blog",
      error: error.message,
    });
  }
});

module.exports = router;

/* // create my test endpoint
app.use("/api/user", router);

app.listen(3000, () => {
  console.log("server is listening");
});
 */
