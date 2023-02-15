const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string();
const createAt = Joi.string();

const getCategorySchema = Joi.object({
  id: id.required()
})

const createCategorySchema = Joi.object({
  id: id.required(),
  name: name.required(),
  createAt: createAt.required(),
})

const updateCategorySchema = Joi.object({
  id: id.optional(),
  name: name.optional(),
  createAt: createAt.optional(),
})

module.exports = { getCategorySchema, createCategorySchema, updateCategorySchema }