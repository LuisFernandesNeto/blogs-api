const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => (
  User.create({ displayName, email, password, image })
);

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    return user;
  };

module.exports = {
    createUser,
    getByEmail,
    getUsers,
    getUserById,
};