const express = require('express');

const Car = require('../models/Car');

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
  console.log('body', req.body);
  const {
    streetAdress,
    city,
    province,
    postalCode,
    year,
    make,
    model,
    odometer,
    advanceNoticeHours,
    maxDurationDays,
    transmission,
    image,
    description,
    licensePlate,
    dailyPrice,
    owner,
  } = req.body;
  Car.create({
    location: {
      streetAdress,
      city,
      province,
      postalCode,
    },
    carSpecs: {
      year,
      make,
      model,
      odometer,
    },
    availability: {
      advanceNoticeHours,
      maxDurationDays,
    },
    transmission,
    image,
    description,
    licensePlate,
    dailyPrice,
    owner,
  })
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
  const carToUpdate = req.params.id;
  const {
    streetAdress,
    city,
    province,
    postalCode,
    year,
    make,
    model,
    odometer,
    advanceNoticeHours,
    maxDurationDays,
    transmission,
    image,
    description,
    licensePlate,
    dailyPrice,
    owner,
  } = req.body;
  Car.findByIdAndUpdate(carToUpdate, {
    location: {
      streetAdress,
      city,
      province,
      postalCode,
    },
    carSpecs: {
      year,
      make,
      model,
      odometer,
    },
    availability: {
      advanceNoticeHours,
      maxDurationDays,
    },
    transmission,
    image,
    description,
    licensePlate,
    dailyPrice,
    owner,
  })
    .then(updatedCar => {
      if (updatedCar) {
        res.status(200).json(updatedCar);
      } else {
        res.status(204).json('Car not found');
      }
    })
    .catch(next);
});

module.exports = router;
