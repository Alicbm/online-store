const { Model, DataTypes, Sequelize } = require('sequelize')

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
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Feedback extends Model {
  static associate(){

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


