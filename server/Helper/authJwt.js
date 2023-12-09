const jwt = require('jsonwebtoken');

// Define your JWT secret key
const jwtSecret = '58a0b2f9f308c28f0318ce205affbbcf4985ab82f522e03c0fbd1ba57c9f167f'; // Replace with your generated secret key

// JWT middleware for authentication
const authJwt = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = { jwtSecret, authJwt };


