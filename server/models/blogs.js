import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10000,
  },
  tags: {
    type: [String],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [
      {
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
      },
    ],
  },
  likes: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        likedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
});

blogSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }

  next();
});

module.exports = mongoose.model('Blog', blogSchema)
