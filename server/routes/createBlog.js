const express = require("express");
const router = express.Router();

// test my endpoint
const app = express()

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


// create my test endpoint
app.use('/api/user', router)

app.listen(3000, () => {
    console.log('server is listening')
})