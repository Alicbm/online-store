const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const price = Joi.number().integer()
const price_min = Joi.number().integer()
const price_max = Joi.number().integer()
const description = Joi.string().min(10)
const image = Joi.string()
const favorite = Joi.boolean()
const createAt = Joi.string();
const brand = Joi.string();
const categoryId = Joi.number().integer()

const limit = Joi.number().integer()
const offset = Joi.number().integer()

const getProductSchema = Joi.object({
  id: id.required()
})

const createProductSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  brand: brand.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  favorite: favorite.required(),
  createAt: createAt.required(),
  categoryId: categoryId.required(),
})

const updateProductSchema = Joi.object({
  name: name.optional(),
  brand: brand.optional(),
  price: price.optional(),
  description: description.optional(),
  image: image.optional(),
  favorite: favorite.optional(),
  createAt: createAt.optional(),
  categoryId: categoryId.optional(),
})

const queryProductSchema = Joi.object({
  limit: limit.optional(),
  offset: offset.optional(),
  price: price.optional(),
  price_min: price_min.optional(),
  price_max: price_max.when('price_min', {
    is: Joi.exist(),
    then: Joi.required()
  }),
})

module.exports = {
  getProductSchema, 
  createProductSchema, 
  updateProductSchema,
  queryProductSchema
}