const express = require('express');

const Driver = require('../models/User');
const Car = require('../models/Car');

const router = express.Router();

// GET /driver/:id page
router.get('/:id', async (req, res, next) => {
  try {
    const driver = await Driver.findById(req.params.id);
    const publishedCars = await Car.find({ owner: req.params.id });
    return res.status(200).json(publishedCars);
  } catch (error) {
    next(error);
  }
});

// PUT /driver/:id
router.put('/:id', (req, res, next) => {
  const driverId = req.params.id;
  const { firstName, lastName, email, profilePhoto, mobileNumber } = req.body;
  Driver.findByIdAndUpdate(driverId, {
    firstName,
    lastName,
    email,
    profilePhoto,
    mobileNumber,
  })
    .then(updatedDriver => {
      if (updatedDriver) {
        res.status(200).json(updatedDriver);
      } else {
        res.status(404).json('Driver not found');
      }
    })
    .catch(next);
});

module.exports = router;
