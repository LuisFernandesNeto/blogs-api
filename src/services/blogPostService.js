const { BlogPost, PostCategory, sequelize, User, Category } = require('../models');

const addPost = async ({ title, content, userId, categoryIds }) => {
    try {
      const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create({
          title, content, userId,
        }, { transaction: t });
        const array = categoryIds.map((id) => (
            PostCategory.create({ postId: post.id, categoryId: id }, { transaction: t })
        ));
        await Promise.all(array);
        return post;
      });
      return result;    
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
 
const getAllPosts = async () => 
  BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }] });

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  
  return post;
};

const updatePost = async ({ id, title, content }) => {
  const post = await BlogPost.update({
    title,
    content,
    where: { id },
  });

  return post;
};
 
module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  updatePost,
};