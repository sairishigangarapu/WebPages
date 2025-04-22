const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
// Add encryption to MongoDB connection
const encryptedMongoUri = process.env.MONGODB_URI;
const mongooseEncryption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: true,
  sslCA: process.env.MONGODB_CA_CERT // Add MongoDB CA certificate path to .env
};

mongoose.connect(encryptedMongoUri, mongooseEncryption)
  .then(() => console.log('MongoDB connected successfully with encryption'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Add global encryption middleware
app.use(require('./middleware/auth')[0]); // encryptRequest
app.use(require('./middleware/auth')[1]); // decryptResponse

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});