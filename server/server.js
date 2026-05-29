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

// Debug route to see what Vercel sends
app.all('/debug-req', (req, res) => res.json({ url: req.url, originalUrl: req.originalUrl, path: req.path }));

// Routes
app.use('/', enquiryRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Fusion Energy server is running!', timestamp: new Date() });
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

module.exports = app;
