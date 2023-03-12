const { Model, DataTypes, Sequelize } = require('sequelize')

const { PRODUCT_TABLE } = require('./product.model')
const FEEDBACK_TABLE = 'feedbacks';

const FeedbackSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  bad: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  regular: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  good: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  productId: {
    field: 'productId',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Feedback extends Model {
  static associate(models){
    this.belongsTo(models.Product, {as: 'product'})
    
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: FEEDBACK_TABLE,
      modelName: 'Feedback',
      timestamps: false
    }
  }
}

module.exports = { FEEDBACK_TABLE, FeedbackSchema, Feedback }


