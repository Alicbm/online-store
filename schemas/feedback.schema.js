const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const description = Joi.string();
const createAt = Joi.string();
// const productId = Joi.number().integer();

const getFeedbackSchema = Joi.object({
  id: id.required()
})

const createFeedbackSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  description: description.required(),
  createAt: createAt.required(),
  // productId: productId.required()
})

const updateFeedbackSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  description: description.optional(),
  createAt: createAt.optional(),
  // productId: productId.optional()
})

module.exports = { getFeedbackSchema, createFeedbackSchema, updateFeedbackSchema }