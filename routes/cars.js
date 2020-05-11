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
  console.log('bodyyyyy', req.body);
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

module.exports = router;
