const { Category } = require('../models');

const addCategory = async (name) => (
  Category.create({ name })
);

const getCategories = () => Category.findAll();

module.exports = {
    addCategory,
    getCategories,
};