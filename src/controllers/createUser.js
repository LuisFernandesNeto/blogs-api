const jwt = require('jsonwebtoken');
const Joi = require('joi');
const UserService = require('../services/userService');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().min(5).required()
    .messages({
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
      }),
  }).validate(body);

module.exports = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { error } = validateBody({ displayName, email, password });
    if (error) return res.status(400).json({ message: error.message });

    const checkEmail = await UserService.getByEmail(email);
    
    if (checkEmail) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const user = await UserService.createUser({ displayName, email, password, image });
    
    if (!user) throw Error;

    const payload = {
        displayName,
        email,
        image,
      };

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '2h',
      });

    res.status(201).json({ token });
};
