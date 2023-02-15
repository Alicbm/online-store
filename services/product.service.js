// const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')

class ProductServices { 

  constructor(){
    this.products = [
      {
        id: 1,
        name: 'product 1',
        price: 1000,
        image: 'https://alicbm.com',
        createAt: '2023-02-10',
        categoryId: 1
      },
      {
        id: 2,
        name: 'product 2',
        price: 2000,
        image: 'https://alicbm.com',
        createAt: '2023-02-10',
        categoryId: 2
      }
    ]
  }

  async generate(){
    const query = 'select * from products'
    const [data] = await sequelize.query(query);
    return data;
  }

  // async create(body){
  //   if(!body){
  //     throw boom.notFound('Product not found')
  //   }
  //   const newProduct = {
  //     ...body
  //   }
  //   this.products.push(newProduct)
  //   return newProduct
  // }

  // async findOne(id){
  //   const index = this.products.findIndex(item => item.id == id)
  //   if(index == -1){
  //     throw boom.notFound('Product not found')
  //   }
  //   return this.products[index];
  // }

  // async update(id, body){
  //   const index = this.products.findIndex(item => item.id == id)
  //   if(index == -1){
  //     throw boom.notFound('Product not found')
  //   }
  //   this.products[index] = {
  //     ... this.products[index],
  //     ...body,
  //   };
  //   return{
  //     ...this.products[index]
  //   }

  // }

  // async delete(id){
  //   const index = this.products.findIndex(item => item.id == id)
  //   if(index == -1){
  //     throw boom.notFound('Product not found')
  //   }
  //   this.products.splice(index, 1)
  //   return {
  //     id,
  //   };
  // }

}

module.exports = ProductServices;