require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware/cors');
const connectDB = require('./config/db');
const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(corsMiddleware);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/enquiries', require('./routes/enquiry'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Bilsanda Energy server is running!', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
