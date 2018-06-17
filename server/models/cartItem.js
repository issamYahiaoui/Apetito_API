const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const CartItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
  },
  totalPrice: {
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
module.exports = mongoose.model('CartItem', CartItemSchema);
