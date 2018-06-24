const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const BinarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
  },

  restaurant_id: {
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
module.exports = mongoose.model('Binary', BinarySchema);
