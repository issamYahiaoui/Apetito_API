const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  adr: {
    type: String,
  },
  openingHour: {
    type: String,
  },
  closingHour: {
    type: String,
  },
  facebookUrl: {
    type: String,
  },
  twitterUrl: {
    type: String,
  },
  rating: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/**
 * @typedef Binary
 */
module.exports = mongoose.model('Restaurant', RestaurantSchema);
