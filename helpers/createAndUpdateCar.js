const Car = require('../models/Car');

const createNewCar = req => {
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
  return Car.create({
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
  });
};

const updateCar = req => {
  const carId = req.params.id;
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
  return Car.findByIdAndUpdate(carId, {
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
  });
};

module.exports = {
  createNewCar,
  updateCar,
};
