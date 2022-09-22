const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A reel must have a name'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A reel must have a duration'],
  },
  difficulty: {
    type: String,
    required: [true, 'A reel must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,
  description: {
    type: String,
    trim: true,
    required: [true, 'A reel must have a description']
  },
  video: {
    type: String,
    required: [true, 'A reel must have a video']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
});
const Reel = mongoose.model('Reel', reelSchema);

module.exports = Reel;
