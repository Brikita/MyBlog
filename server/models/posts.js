const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userName: {
    type: String,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 7,
    required: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 500,
    required: true,
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

profileSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
  });


module.exports = mongoose.model('Profile', profileSchema)