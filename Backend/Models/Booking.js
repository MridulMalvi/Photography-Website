const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  workType: { type: String, required: true },
  eventDate: { type: Date, required: true },
  details: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);