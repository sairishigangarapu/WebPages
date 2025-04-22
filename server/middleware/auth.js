const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Add encryption middleware
const encryptRequest = (req, res, next) => {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    return res.status(500).json({ message: 'Server encryption not configured' });
  }

  // Encrypt request body if present
  if (req.body && Object.keys(req.body).length > 0) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(encryptionKey, 'hex'), iv);
    const encrypted = Buffer.concat([
      cipher.update(JSON.stringify(req.body), 'utf8'),
      cipher.final()
    ]);
    const authTag = cipher.getAuthTag();

    // Store encrypted data
    req.encryptedData = {
      iv: iv.toString('hex'),
      data: encrypted.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }
  next();
};

// Add decryption middleware
const decryptResponse = (req, res, next) => {
  const originalSend = res.send;
  res.send = function(data) {
    // Only encrypt non-error responses
    if (res.statusCode < 400 && data) {
      const encryptionKey = process.env.ENCRYPTION_KEY;
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(encryptionKey, 'hex'), iv);
      const encrypted = Buffer.concat([
        cipher.update(JSON.stringify(data), 'utf8'),
        cipher.final()
      ]);
      const authTag = cipher.getAuthTag();

      data = {
        iv: iv.toString('hex'),
        data: encrypted.toString('hex'),
        authTag: authTag.toString('hex')
      };
    }
    originalSend.call(this, data);
  };
  next();
};

// Combine auth middleware with encryption
module.exports = [
  encryptRequest,
  decryptResponse,
  (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  }
];