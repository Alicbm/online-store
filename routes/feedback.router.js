const express = require('express');
const FeedbackServices = require('../services/feedback.service');

const router = express.Router();
const service = new FeedbackServices();

const {
  getFeedbackSchema, createFeedbackSchema, updateFeedbackSchema
} = require('../schemas/feedback.schema')

const validatorHandler = require('../middlewares/validator.handler')

router.get('/', async (req, res) => {
  try {
    const feedback = await service.generate();
    res.json(feedback)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
})

router.get('/:id',
  validatorHandler(getFeedbackSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const feedback = await service.findOne(id);
      res.json(feedback)

    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createFeedbackSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const feedback = await service.create(body);
      res.json(feedback)

    } catch (err) {
      next(err)
    }
  })

router.patch('/:id',
  validatorHandler(updateFeedbackSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const feedback = await service.update(id, body);

      res.json(feedback)

    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const feedback = await service.delete(id);

    res.json(feedback)

  } catch (err) {
    next(err)
  }
})

module.exports = router;