const BlogPostService = require('../services/blogPostService');
const CategoryService = require('../services/categoryService');

module.exports = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.user.data;

    if (!title || !content || categoryIds.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const getCategories = await CategoryService.getCategories();

    const allCategories = getCategories.map((c) => (
        c.dataValues.id
    ));

    const check = categoryIds.every((id) => allCategories.includes(id));

    if (!check) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const post = await BlogPostService.addPost({ title, content, userId, categoryIds });

    return res.status(201).json(post);
};