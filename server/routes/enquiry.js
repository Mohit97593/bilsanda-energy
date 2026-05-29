const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');
const https = require('https');

// Validation rules
const enquiryValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
];

// POST /api/enquiry — Submit new enquiry
router.post(['/', '/enquiry', '/api/enquiry'], enquiryValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  try {
    const { fullName, email, phone, companyName, city, productInterest, quantity, message } = req.body;

    const enquiry = new Enquiry({
      fullName,
      email,
      phone,
      companyName: companyName || '',
      city: city || '',
      productInterest: productInterest || 'Other',
      quantity: quantity || '',
      message: message || '',
    });

    await enquiry.save();

    // Send email using Brevo API
    try {
      const emailData = JSON.stringify({
        sender: { name: "Fusion Energy Website", email: "no-reply@fusionenergy.com" },
        to: [{ email: "mohitanshu7800@gmail.com", name: "Mohitanshu" }],
        subject: "New Enquiry from Fusion Energy Website",
        htmlContent: `
          <h3>New Enquiry Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Product Interest:</strong> ${productInterest}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      const options = {
        hostname: 'api.brevo.com',
        path: '/v3/smtp/email',
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json',
          'content-length': Buffer.byteLength(emailData)
        }
      };

      const reqEmail = https.request(options, (resEmail) => {
        let data = '';
        resEmail.on('data', (chunk) => { data += chunk; });
        resEmail.on('end', () => { console.log('Brevo response:', data); });
      });

      reqEmail.on('error', (e) => {
        console.error('Error sending email:', e);
      });

      reqEmail.write(emailData);
      reqEmail.end();
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! Our team will contact you within 24 hours.',
      data: enquiry,
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message,
    });
  }
});

// GET /api/enquiries/all — Get all enquiries (admin)
router.get(['/all', '/enquiries/all', '/api/enquiries/all'], async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

module.exports = router;
