const boom = require('@hapi/boom')
const { Op } = require('sequelize')

const { models } = require('../libs/sequelize')

class ProductServices { 

  constructor(){}

  async generate(query) {
    const options = {
      include: ['category'],
      where: {}
    }

    const {limit, offset} = query
    if(limit && offset){
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    }

    const {price} = query;
    if(price){
      options.where.price = price;
    }

    const { price_min, price_max } = query;
    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: parseInt(price_min),
        [Op.lte]: parseInt(price_max)
      };
    }

    const rta = await models.Product.findAll(options);
    return rta;
  }

  async create(body) {
    if (!body) {
      throw boom.notFound('Product not found')
    }
    const rta = await models.Product.create(body);
    return rta;
  }

  async findOne(id) {
    const rta = await models.Product.findByPk(id);
    if (!rta) {
      throw boom.notFound('Product not found')
    }
    return rta;
  }

  async update(id, body) {
    const element = await models.Product.findByPk(id);
    const rta = await element.update(body)
    return rta;
    
    // if (!element) {
    //   throw boom.notFound('Product not found')
    // }

  }

  async delete(id) {
    const element = await models.Product.findByPk(id);
    if (!element) {
      throw boom.notFound('Product not found')
    }
    await element.destroy()

    return id
  }

}

module.exports = ProductServices;