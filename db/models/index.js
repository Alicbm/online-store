const { Category, CategorySchema } = require('./category.model')
const { Product, ProductSchema } = require('./product.model')
const { Feedback, FeedbackSchema } = require('./feedback.model')

function setupModels(sequelize){
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))
  Feedback.init(FeedbackSchema, Feedback.config(sequelize))
}

module.exports = setupModels