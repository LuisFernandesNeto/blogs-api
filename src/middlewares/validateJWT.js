// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

require('dotenv/config');
const UserService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'xablau';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
   try {
    const decoded = jwt.verify(token, secret);

    const users = await UserService.getUsers(decoded);

    /* if (!users) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    } */

    req.user = users;

    next();
   } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
   }   
};