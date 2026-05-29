const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://fusion-energy.vercel.app',
    process.env.CORS_ORIGIN
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
