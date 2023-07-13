const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require("mongoose");

const createBlogRouter = require('./routes/createBlog')
const updateBlogRouter = require('./routes/updateBlog')
const deleteBlogRouter = require('./routes/deleteBlog')
const getBlogRouter = require('./routes/getBlogs')
// connect to database

mongoose
  .connect(
    "mongodb+srv://brikita:brian12@test.nlyxchf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, 600000
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection error:", error));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error ${err.message}`);
});


//middleware
app.use(bodyParser.json())



// create my test endpoint
app.use("/api/user", createBlogRouter);
app.use("/api/user", updateBlogRouter);
app.use("/api/user", deleteBlogRouter);
app.use("/api/user", getBlogRouter);

app.listen(3000, () => {
  console.log("server is listening");
});

