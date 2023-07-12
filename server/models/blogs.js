import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [{
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }],
  },
  likes: {
    type: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      likedAt: {
        type: Date,
        default: Date.now,
      },
    }],
    default: [],
  },
});

postSchema.pre('save', (next) => {
    now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
  });
 