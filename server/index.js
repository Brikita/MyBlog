const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//middleware
app.use(bodyParser.json())

const createBlogRouter = require('./routes/createBlog')
const updateBlogRouter = require('./routes/updateBlog')
const deleteBlogRouter = require('./routes/deleteBlog')


// create my test endpoint
app.use("/api/user", createBlogRouter);
app.use("/api/user", updateBlogRouter);
app.use("/api/user", deleteBlogRouter);

app.listen(3000, () => {
  console.log("server is listening");
});

