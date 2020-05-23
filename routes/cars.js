const express = require('express');
const { check, validationResult } = require('express-validator');
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
router.post(
  '/',
  [
    check('streetAdress', 'Your Adress is not valid')
      .not()
      .isEmpty(),
    check('postalCode', 'Your ZIP code is not valid').isNumeric(),
    check('city')
      .not()
      .isEmpty(),
    check('province', 'Add the Province where the car is located')
      .not()
      .isEmpty(),
    check('make', 'Add the Brand of the Car')
      .not()
      .isEmpty(),
    check('model', 'Add the model of the Car')
      .not()
      .isEmpty(),
    check('year', 'Add a valid year').isNumeric(),
    check('odometer', 'Add the kms of your car').isNumeric(),
    check('licensePlate', 'Not a valid License Plate')
      .not()
      .isEmpty(),
    check('image', 'Add an image URL')
      .not()
      .isEmpty(),
    check('advanceNoticeHours', 'How many hours in advance should someone book your car').isNumeric(),
    check('maxDurationDays', 'How many days is the maximum duration of the rent').isNumeric(),
    check('dailyPrice', 'Add a daily rent price for your car').isNumeric(),
    check('description', 'Add a description of your car')
      .not()
      .isEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    Car.create(buildCar(req.body))
      .then(newCar => {
        res.status(201).json(newCar);
      })
      .catch(next);
  }
);

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
