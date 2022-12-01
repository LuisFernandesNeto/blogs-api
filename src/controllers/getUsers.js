const UserService = require('../services/userService');

module.exports = async (_req, res) => {
    const users = await UserService.getUsers();

    if (!users) throw Error;

    res.status(200).json(users);
};