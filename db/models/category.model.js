const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
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
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Category extends Model {
  static associate(models){
    this.hasMany(models.Product, {
      as: 'products', 
      foreignKey: 'categoryId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category }


