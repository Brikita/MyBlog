// REQUIREMENTS
const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const { useNavigate } = require('react-router-dom')
const mongoose = require('mongoose')
const cors = require('cors')
//const dotenv = require('dotenv')
const User = require('./models/newUser')


const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');
const user = require('./routes/userInfo')
const createBlogRouter = require('./routes/createBlog')
const updateBlogRouter = require('./routes/updateBlog')
const deleteBlogRouter = require('./routes/deleteBlog')
const getBlogRouter = require('./routes/getBlogs')
const getBlogIdRouter = require('./routes/getBlogId')
   


// MIDDLEWARE MOSTLY FOR GETTING THE FORM DATA FROM THE LOGIN AND SIGNUP PAGES
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/api/people', user)
app.use(bodyParser.json())

// MONGOOSE... FOR CREATING A SCHEMA
mongoose.connect("mongodb+srv://titans:blog2.0@nodeapi.xr7lkoc.mongodb.net/authentication?retryWrites=true&w=majority")
mongoose.connection.on("error", err => {
    console.log(err)
})

// CONNECT TO DATABASE
let database; // global variable to store the MongoDB connection object
function connectDB (callback) {    
    MongoClient.connect("mongodb+srv://titans:blog2.0@nodeapi.xr7lkoc.mongodb.net/authentication?retryWrites=true&w=majority")
    .then((connected)=>{
        database = connected.db()
        return callback()
    })
    .catch(err => {
        console.log(err)
        return callback(err)
    })
}

// SERVER LISTEN
connectDB((err)=> {
    if (!err) {
        
        app.listen(3000, () => {
            console.log(`Server is running on port 3000`)
        })
    }
})

// ROUTES
// 1. LOGIN
app.post('/login', (req, res) => {
    const email = req.body['email']
    const password = req.body['password']

    let secretInfo = []
    database.collection('credentials')
        .find()
        .forEach(credential => secretInfo.push(credential)) 
        .then(() => {
            for (let i = 0; i < secretInfo.length; i++) {
                if (secretInfo[i].email === email && secretInfo[i].password === password) {
                    return res.redirect('http://localhost:5173/')
                }                
            }
            res.send('<h1>Error: Invalid Credentials</h1>')
        })  
})

app.use("/api/user", createBlogRouter);
app.use("/api/user", getBlogIdRouter);
app.use("/api/user", updateBlogRouter);
app.use("/api/user", deleteBlogRouter);
app.use("/api/user", getBlogRouter);

// VALIDATOR MIDDLEWARE
/* const signUpValidator = (req, res, next) => {
    req.check("username", "Add username").notEmpty()
    req.check("email","Enter a valid Email Address").isEmail()
    req.check("password", "Password must be at least 6 characters long").isLength({min: 6})
    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }
    next()
} */

const signUpValidator = [
    check('username').notEmpty().withMessage('Please provide a username'),
    check('email').isEmail().withMessage('Please provide a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const firstError = errors.array()[0].msg;
        return res.status(400).json({ error: firstError });
      }
      next();
    }
  ];
// 2. SIGN UP
/* app.post('/signup', signUpValidator, (req, res)=> {
    const username = req.body['username']
    const email = req.body['email']
    const password = req.body['password']
    const Confirm_password = req.body['confirmPassword'] 

    if (password === Confirm_password) {
        let newuser = new newUser({username, email, password})
        newuser.save()
        .then(res.redirect('http://localhost:5173/'))
    }
}) */

app.post('/signup', signUpValidator, (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
     if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
     const newUser = new User({ username, email, password });
    newUser.save()
      .then(() => {res.redirect(`http://localhost:5173/profile/${newUser._id}`)})
      .catch(error => res.status(500).json({ error: 'Failed to create a new user' }));
  });