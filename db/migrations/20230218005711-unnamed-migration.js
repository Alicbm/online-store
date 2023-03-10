'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(CATEGORY_TABLE, 'image', CategorySchema.image)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(CATEGORY_TABLE, 'image')
  }
};
