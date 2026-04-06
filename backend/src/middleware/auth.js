const jwt = require('jsonwebtoken');

require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.cookies.devmatch_token;

  if (!token) {
    return res.status(401).json({ message: 'No authentication token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'devmatch_super_secret_jwt_key_change_in_prod');
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err);
    return res.status(401).json({ message: 'Invalid or expired authentication token.' });
  }
};

module.exports = authMiddleware;
