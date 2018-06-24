const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const DishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  restaurant_id: {
    type: String,
  },
  category_id: {
    type: String,
  },
  binary_id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/**
 * @typedef Binary
 */
module.exports = mongoose.model('Dish', DishSchema);
