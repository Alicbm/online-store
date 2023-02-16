const { Sequelize } = require('sequelize');

const setupModels = require('../db/models')

const URI = 'mysql://root:TKQWmN2byhdedA0CRo5k@containers-us-west-23.railway.app:6970/railway'

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
})

setupModels(sequelize);

module.exports = sequelize;


