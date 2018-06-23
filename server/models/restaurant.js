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
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  imageUrl2: {
    type: String,
  },
  imageUrl3: {
    type: String,
  },
  latitude: {
    type: Number,
    required: true
  },
  logitude: {
    type: Number,
    required: true
  },

  dishes: [{ type: mongoose.Schema.Types.ObjectId }] ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/**
 * @typedef Binary
 */
module.exports = mongoose.model('Restaurant', RestaurantSchema);
