const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:[true, 'The reel must have a user']
  },
  place: {
    type: String,
    lowercase: true,
    required: [true, 'A reel must have a place (#hashtag)'],
  },
  subPlace: {
    type: String,
    default: 'none'
  },
  city: {
    type: String,
    // lowercase: true,
    required: [true, 'A reel must have a city'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A reel must have a description'],
  },
  video: {
    type: String,
    // required: [true, 'A reel must have a video']
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reel = mongoose.model('Reel', reelSchema);

module.exports = Reel;
