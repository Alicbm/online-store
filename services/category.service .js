const boom = require('@hapi/boom')

class CategoryServices { 

  constructor(){
    this.categories = [
      {
        id: 1,
        name: 'category 1',
        createAt: '2023-02-10',
      },
      {
        id: 2,
        name: 'category 2',
        createAt: '2023-02-10',
      }
    ]
  }

  async generate(){
    const rta = this.categories;
    return rta;
  }

  async create(body){
    if(!body){
      throw boom.notFound('Product not found')
    }
    const newProduct = {
      ...body
    }
    this.categories.push(newProduct)
    return newProduct
  }

  async findOne(id){
    const index = this.categories.findIndex(item => item.id == id)
    console.log(index);
    if(index == -1){
      throw boom.notFound('Product not found')
    }
    return this.categories[index];
  }

  async update(id, body){
    const index = this.categories.findIndex(item => item.id == id)
    if(index == -1){
      throw boom.notFound('Product not found')
    }
    this.categories[index] = {
      ... this.categories[index],
      ...body,
    };
    return{
      ...this.categories[index]
    }

  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id == id)
    if(index == -1){
      throw boom.notFound('Product not found')
    }
    this.categories.splice(index, 1)
    return {
      id,
    };
  }

}

module.exports = CategoryServices;