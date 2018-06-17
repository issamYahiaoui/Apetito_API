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
  dishes: [{ type: mongoose.Schema.Types.ObjectId }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/**
 * @typedef Binary
 */
module.exports = mongoose.model('Binary', BinarySchema);
