const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const CartItemSchema = new mongoose.Schema({

  quantity: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  dish_id: {
    type: String,
    require : true
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
