const BlogPostService = require('../services/blogPostService');

module.exports = async (req, res) => {
      const { id } = req.params;
      const { title, content, userId } = req.body;
      const post = await BlogPostService.updatePost({ id, title, content });

      if (id.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
    
      if (!post) return res.status(404).json({ message: 'Post does not exist' });
  
      return res.status(200).json(post);
  };