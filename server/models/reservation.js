const mongoose = require('mongoose');


/**
 * Binary Schema
 */
const ReservationSchema = new mongoose.Schema({
  peopleNb: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true

  },
  hour: {
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
module.exports = mongoose.model('Reservation', ReservationSchema);
