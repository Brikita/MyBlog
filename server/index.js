const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
 const createBlogRouter = require('./routes/createBlog');
const updateBlogRouter = require('./routes/updateBlog');
const deleteBlogRouter = require('./routes/deleteBlog');
const getBlogRouter = require('./routes/getBlogs');
const getBlogIdRouter = require('./routes/getBlogId');
 // Connect to the database
mongoose
  .connect(
    "mongodb+srv://brikita:brayoh@test.nlyxchf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("DB connection error:", error));
 mongoose.connection.on("error", (err) => {
  console.log(`DB connection error ${err.message}`);
});
 // Middleware
app.use(bodyParser.json());
app.use(cors());
 // Create endpoints
app.use("/api/user", createBlogRouter);
app.use("/api/user", getBlogIdRouter);
app.use("/api/user", updateBlogRouter);
app.use("/api/user", deleteBlogRouter);
app.use("/api/user", getBlogRouter);
 // Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});