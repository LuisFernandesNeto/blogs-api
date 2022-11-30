const UserService = require('../services/userService');

module.exports = async (req, res) => {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
    
      if (!user) return res.status(404).json({ message: 'User does not exist' });
  
      return res.status(200).json(user);
  };
