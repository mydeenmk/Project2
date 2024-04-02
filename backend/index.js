// index.js
const express = require('express');
const twilio = require('twilio');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


+
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define routes for sending OTP and verifying OTP

// Start the server
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// Define routes
app.post('/api/send-otp', (req, res) => {
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    // Send OTP via Twilio SMS
    client.messages.create({
        body: `Your OTP for login: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
    })
    .then(message => {
        console.log('OTP sent:', message.sid);
        res.status(200).json({ success: true, message: 'OTP sent successfully' });
    })
    .catch(err => {
        console.error('Error sending OTP:', err);
        res.status(500).json({ success: false, error: 'Failed to send OTP' });
    });
});

app.post('/api/verify-otp', (req, res) => {
    const { otp } = req.body;
    // Verify OTP (you can implement your verification logic here)
    // For simplicity, assume the OTP is correct if it matches '123456'
    if (otp === '123456') {
        res.status(200).json({ success: true, message: 'OTP verified successfully' });
    } else {
        res.status(400).json({ success: false, error: 'Invalid OTP' });
    }
});
