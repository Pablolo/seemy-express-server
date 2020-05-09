const express = require('express');

const Car = require('../models/Car');
const router = express.Router();

// GET /cars page.
router.get('/', async (req, res, next) => {
  try {
    return res.status(200).json({
      car: 'car',
    });
  } catch (error) {
    next(error);
  }
});
