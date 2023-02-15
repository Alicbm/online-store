const { Category, CategorySchema } = require('./category.model')

function setupModels(sequelize){
  Category.init(CategorySchema, Category.config(sequelize))
}

module.exports = setupModels

