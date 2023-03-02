'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model')
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model')
const { FeedbackSchema, FEEDBACK_TABLE } = require('../models/feedback.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(FEEDBACK_TABLE, FeedbackSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(FEEDBACK_TABLE);
  }
};
