// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'xablau';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
   try {
    const decoded = jwt.verify(token, secret);

    /* const users = await UserService.getUsers(decoded);

    req.user = users; */

    /* const userById = await UserService.getUserById(decoded.data.userId); */

    req.user = decoded;

    next();
   } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
   }   
};