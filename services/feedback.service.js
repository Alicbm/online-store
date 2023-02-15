// const boom = require('@hapi/boom')

const sequelize = require('../libs/sequelize')

class FeedbackServices { 

  constructor(){
    this.feedback = [
      {
        id: 1,
        name: 'alic',
        description: 'el producto es excelente',
        createAt: '2023-02-10',
        productId: 1
      },
      {
        id: 2,
        name: 'david',
        description: 'el producto me sirvio muchisismo',
        createAt: '2023-02-20',
        productId: 2
      }
    ]
  }

  async generate(){
    const query = 'select * from feedbacks'
    const [data] = await sequelize.query(query);
    return data;  }

  // async create(body){
  //   if(!body){
  //     throw boom.notFound('Feedback not found')
  //   }
  //   const newFeedback = {
  //     ...body
  //   }
  //   this.feedback.push(newFeedback)
  //   return newFeedback
  // }

  // async findOne(id){
  //   const index = this.feedback.findIndex(item => item.id == id)

  //   if(index == -1){
  //     throw boom.notFound('Feedback not found')
  //   }
  //   return this.feedback[index];
  // }

  // async update(id, body){
  //   const index = this.feedback.findIndex(item => item.id == id)
  //   if(index == -1){
  //     throw boom.notFound('Feedback not found')
  //   }
  //   this.feedback[index] = {
  //     ... this.feedback[index],
  //     ...body,
  //   };
  //   return{
  //     ...this.feedback[index]
  //   }

  // }

  // async delete(id){
  //   const index = this.feedback.findIndex(item => item.id == id)
  //   if(index == -1){
  //     throw boom.notFound('Feedback not found')
  //   }
  //   this.feedback.splice(index, 1)
  //   return {
  //     id,
  //   };
  // }

}

module.exports = FeedbackServices;