const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:[true, 'The comment must have a user']
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'A comment must have a text'],
  },
  commentedAt: {
    type: Date,
    default: Date.now(),
  },
  commentLikes: {
    type: Number,
    default: 0
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
