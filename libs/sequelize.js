const { Sequelize } = require('sequelize');

// const { config } = require('../config/config')
// const setupModels = require('../db/models')

// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = 'mysql://root:Xp2II1BmA4t06isFOQLQ@containers-us-west-93.railway.app:5779/railway'

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
})

// setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;


