const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const PositionSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
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
module.exports = mongoose.model('Position', PositionSchema);
