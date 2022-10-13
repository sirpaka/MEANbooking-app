const mongoose = require('mongoose');
const config = require('../config/database');

// Booking Schema
const BookingSchema = mongoose.Schema({
date: {
    type: Date,
    required: true
},
from: {
    type: String,
    required: true
},
to: {
    type: String,
    required: true
},
booker_name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
tel: {
    type: String,
    required: true
},
billing_data: {
    type: String
}
});

const Booking = module.exports = mongoose.model('Booking', BookingSchema);
