const express = require('express');
const CategoryServices = require('../services/category.service ');

const router = express.Router();
const service = new CategoryServices();

const {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema
} = require('../schemas/category.schema')

const validatorHandler = require('../middlewares/validator.handler')

router.get('/', async (req, res) => {
  try {
    const category = await service.generate();
    res.json(category)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
})

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category)

    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const category = await service.create(body);
      res.json(category)

    } catch (err) {
      next(err)
    }
  })

router.patch('/:id',
  validatorHandler(updateCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);

      res.json(category)

    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.delete(id);

    res.json(category)

  } catch (err) {
    next(err)
  }
})

module.exports = router;