const express = require('express');

const Car = require('../models/Car');
const { createNewCar, updateCar } = require('../helpers/createAndUpdateCar');

const router = express.Router();

// GET /cars page
router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.find();
    return res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
});

// POST /cars to publish a new car
router.post('/', (req, res, next) => {
  createNewCar(req)
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

// GET /cars/:id page
router.get('/:id', async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    return res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

// PUT /cars/:id
router.put('/:id', (req, res, next) => {
  updateCar(req)
    .then(updatedCar => {
      if (updatedCar) {
        res.status(200).json(updatedCar);
      } else {
        res.status(204).json('Car not found');
      }
    })
    .catch(next);
});

// DELETE /cars/:id page
router.delete('/:id', (req, res, next) => {
  Car.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Car with ID ${req.params.id} removed successfully.` });
    })
    .catch(next);
});

module.exports = router;
