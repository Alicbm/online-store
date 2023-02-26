'use strict';

const { FeedbackSchema, FEEDBACK_TABLE } = require('../models/feedback.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(FEEDBACK_TABLE, 'bad', FeedbackSchema.bad)
    await queryInterface.addColumn(FEEDBACK_TABLE, 'regular', FeedbackSchema.regular)
    await queryInterface.addColumn(FEEDBACK_TABLE, 'good', FeedbackSchema.good)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(FEEDBACK_TABLE, 'bad')
    await queryInterface.removeColumn(FEEDBACK_TABLE, 'regular')
    await queryInterface.removeColumn(FEEDBACK_TABLE, 'good')
  }
};
