const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const bad = Joi.boolean();
const regular = Joi.boolean();
const good = Joi.boolean();
const createAt = Joi.string();
const description = Joi.string();
const productId = Joi.number().integer();

const getFeedbackSchema = Joi.object({
  id: id.required()
})

const createFeedbackSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  bad: bad.required(),
  regular: regular.required(),
  good: good.required(),
  description: description.required(),
  createAt: createAt.required(),
  productId: productId.required()
})

const updateFeedbackSchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  bad: bad.optional(),
  regular: regular.optional(),
  good: good.optional(),
  description: description.optional(),
  createAt: createAt.optional(),
  productId: productId.optional()
})

module.exports = { getFeedbackSchema, createFeedbackSchema, updateFeedbackSchema }