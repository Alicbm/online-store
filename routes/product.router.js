const express = require('express');
const ProductServices = require('../services/product.service');

const router = express.Router();
const service = new ProductServices();

const validatorHandler = require('../middlewares/validator.handler')

const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
  queryProductSchema
} = require('../schemas/product.schema')

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res) => {
    try {
      const product = await service.generate(req.query);
      res.json(product)
    } catch (err) {
      res.status(404).json({
        message: err.message
      })
    }
  })

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product)

    } catch (err) {
      res.status(404).json({
        message: err.message
      })
    }
  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const product = await service.create(body);
      res.json(product)
    } catch (err) {
      return {
        message: err.message
      }
    }
  })

router.patch('/:id',
  validatorHandler(updateProductSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);

      res.json(product)

    } catch (err) {
      res.status(201).json({
        message: err.message
      })
    }
  })

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);

    res.json(product)

  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
})

module.exports = router;