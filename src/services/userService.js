const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => (
  User.create({ displayName, email, password, image })
);

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
    createUser,
    getByEmail,
    getUsers,
};