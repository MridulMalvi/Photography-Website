const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Booking = require('./Models/Booking');
const Contact = require('./Models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- API Routes ---

// Route to handle booking form submissions
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting booking.', error });
  }
});

// Route to handle contact form submissions
app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form.', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});