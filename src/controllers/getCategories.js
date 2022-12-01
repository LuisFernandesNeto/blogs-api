const CategoryService = require('../services/categoryService');

module.exports = async (_req, res) => {
    const categories = await CategoryService.getCategories();

    if (!categories) throw Error;

    res.status(200).json(categories);
};
