const BlogPostService = require('../services/blogPostService');

module.exports = async (req, res) => {
      const { id } = req.params;
      const post = await BlogPostService.getPostById(id);
    
      if (!post) return res.status(404).json({ message: 'Post does not exist' });
  
      return res.status(200).json(post);
  };
