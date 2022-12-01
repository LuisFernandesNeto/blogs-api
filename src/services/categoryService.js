const { Category } = require('../models');

const addCategory = async (name) => (
  Category.create({ name })
);

module.exports = {
    addCategory,
};