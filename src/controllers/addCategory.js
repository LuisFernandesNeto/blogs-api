const CategoryService = require('../services/categoryService');

module.exports = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const category = await CategoryService.addCategory(name);

    return res.status(201).json(category);
};