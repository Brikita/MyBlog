const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./routes/userInfo')
const cors = require('cors')

// CONNECTION TO DATABASE

mongoose.connect(
    'mongodb+srv://titans:blog2.0@nodeapi.xr7lkoc.mongodb.net/authentication?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected'))
    .catch((error) => console.error('DB connection error:', error))
    
    mongoose.connection.on('error', (err) => {
        console.log(`DB connection error ${err.message}`)
    })

// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use('/api/people', user)

app.listen(3000, () => {
    console.log("server is listening");
  });