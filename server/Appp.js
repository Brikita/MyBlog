const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://brikita:brayoh@test.nlyxchf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    
  });
  const CommentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  const BlogPost = mongoose.model('BlogPost', blogPostSchema);
  const comment = mongoose.model("comment",CommentSchema)

 const bp= new BlogPost ({title :'Post 2', content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
image: "https://p1.pxfuel.com/preview/933/927/598/wallpaper-gaming-game-play-technology-fun.jpg"})
 bp.save().then(() => console.log("Blog post saved"))

 
 app.get('/blog/posts', (req, res) => {
    BlogPost.find({})
    .then(BlogPosts => {
      res.status(200)
      .json(BlogPosts)
      console.log(BlogPosts)
    })
    .catch(error => {
      res.send(error)
    });
    
  });

  




  app.post('/blog/posts/:id/comment', async (req, res) => {
    try {
      const blogid = req.params.id
      const { author, content } = req.body
      const comment = new Comment({ author, content })
      const savedComment = await comment.save()


      const blog = await BlogPost.findByIdAndUpdate(blogid, comment)//come back to it
      res.status(201).json(comment);
     
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


   app.delete('/blog/posts/:id', (req, res) => {
    BlogPost.findOneAndDelete({ _id: req.params.id })
  .then(deletedPost => {
    if (!deletedPost) {
      return res.status(404).json({ success: false, msg: `No post with id ${req.params.id}` });
    }
    
    return BlogPost.find()
      .then(updatedPosts => {
        return res.status(200).json({ success: true, data: updatedPosts });
      })
      .catch(error => {
        return res.status(500).json({ success: false, msg: 'Error fetching updated posts', error });
      });
  })
  .catch(error => {
    return res.status(500).json({ success: false, msg: 'Error deleting post', error });
  });
  })







  
    
  // Start the server
  const port =3024;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })