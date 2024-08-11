const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = {}; // In-memory user store for demo purposes
const otpStore = {}; // Store OTPs

// Helper function to send OTP
const sendOtpEmail = (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password' // Your email password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending OTP:', error);
        } else {
            console.log('OTP sent:', info.response);
        }
    });
};

// Sign Up Endpoint
app.post('/signup', (req, res) => {
    const { name, phoneNumber, email, password } = req.body;
    if (users[email]) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    users[email] = { name, phoneNumber, email, password: hashedPassword };
    res.status(201).json({ message: 'User created' });
});

// Sign In Endpoint
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email }, 'secret-key', { expiresIn: '1h' });
    res.json({ token });
});

// Forgot Password: Send OTP Endpoint
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = users[email];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    otpStore[email] = otp;
    sendOtpEmail(email, otp);

    res.json({ message: 'OTP sent' });
});

// Verify OTP Endpoint
app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] !== otp) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    res.json({ message: 'OTP verified' });
});

// Reset Password Endpoint
app.post('/reset-password', (req, res) => {
    const { email, newPassword } = req.body;
    const user = users[email];

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 8);
    user.password = hashedPassword;

    res.json({ message: 'Password reset successful' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
