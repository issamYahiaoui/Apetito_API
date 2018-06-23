const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});
/**
 * @typedef Binary
 */
module.exports = mongoose.model('Category', CategorySchema);
