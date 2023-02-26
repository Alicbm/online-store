'use strict';

const { FeedbackSchema, FEEDBACK_TABLE } = require('../models/feedback.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(FEEDBACK_TABLE, 'productId', FeedbackSchema.productId)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(FEEDBACK_TABLE, 'productId')
  }
};
