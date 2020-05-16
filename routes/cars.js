const express = require('express');

const Car = require('../models/Car');
const { buildCar, destructureCars, destructureOneCar } = require('../helpers/createAndUpdateCar');

const router = express.Router();

// GET /cars page
router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.find();
    const carDestructured = destructureCars(cars);
    return res.status(200).json(carDestructured);
  } catch (error) {
    next(error);
  }
});

// POST /cars to publish a new car
router.post('/', (req, res, next) => {
  Car.create(buildCar(req.body))
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

// GET /cars/:id page
router.get('/:id', async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    const carDestructured = destructureOneCar(car);
    return res.status(200).json(carDestructured);
  } catch (error) {
    next(error);
  }
});

// PUT /cars/:id
router.put('/:id', (req, res, next) => {
  const carId = req.params.id;
  Car.findByIdAndUpdate(carId, buildCar(req.body))
    .then(updatedCar => {
      res.status(200).json(updatedCar);
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
