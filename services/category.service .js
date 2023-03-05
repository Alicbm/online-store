const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CategoryServices {

  constructor() {}

  async generate() {
    const rta = await models.Category.findAll({
      include: ['products']
    });
    return rta;
  }

  async create(body) {
    if (!body) {
      throw boom.notFound('Product not found')
    }
    const rta = await models.Category.create(body);
    return rta;
  }

  async findOne(id) {
    const rta = await models.Category.findByPk(id, {
      include: ['products']
    });
    if (!rta) {
      throw boom.notFound('Product not found')
    }
    return rta;
  }

  async update(id, body) {
    const element = await models.Category.findByPk(id);
    
    if (!element) {
      throw boom.notFound('Product not found')
    }
    const rta = await element.update(body)
    return rta;

  }

  async delete(id) {
    const element = await models.Category.findByPk(id);
    if (!element) {
      throw boom.notFound('Product not found')
    }
    await element.destroy()

    return id
  }

}

module.exports = CategoryServices;