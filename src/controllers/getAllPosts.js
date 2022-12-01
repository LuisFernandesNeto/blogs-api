const BlogPostService = require('../services/blogPostService');

module.exports = async (_req, res) => {
    const posts = await BlogPostService.getAllPosts();

    if (!posts) throw Error;

    res.status(200).json(posts);
};