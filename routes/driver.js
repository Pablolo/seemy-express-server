const express = require('express');

const Driver = require('../models/User');

const router = express.Router();

// GET /driver/:id page
router.get('/:id', async (req, res, next) => {
  try {
    const driver = await Driver.findById(req.params.id);
    return res.status(200).json(driver);
  } catch (error) {
    next(error);
  }
});

// PUT /driver/:id
router.put('/:id', (req, res, next) => {
  const driverToUpdate = req.params.id;
  const { firstName, lastName, email, profilePhoto, mobileNumber } = req.body;
  Driver.findByIdAndUpdate(driverToUpdate, {
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
        res.status(204).json('Car not found');
      }
    })
    .catch(next);
});

module.exports = router;
