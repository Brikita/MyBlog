const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();

// import the blogs
const Blog = require("../models/blogs");

//  middleware
app.use(bodyParser.json());

// updating endpoint

router.put("/updateBlog/:id", async (req, res, next) => {
  const { title, content, tags } = req.body;
  const blogId = req.params.id;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { title, content, tags },
      { new: true }
    );
    res.status(200).json({
      message: "Updated the Blog",
      data: updatedBlog,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update blog",
      err,
    });
  }
});

module.exports = router;

/* //Test my Endpoint
app.use("/api/user", router);

//start the server
app.listen(3000, () => {
  console.log("Server is listening in the port 3000");
});
 */