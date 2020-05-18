function buildCar(car) {
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
  } = car;
  return {
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
  };
}

function destructureCars(cars) {
  return cars.map(car => {
    const {
      _id,
      location: { streetAdress, city, province, postalCode },
      carSpecs: { year, make, model, odometer },
      availability: { advanceNoticeHours, maxDurationDays },
      transmission,
      image,
      description,
      licensePlate,
      dailyPrice,
      owner,
    } = car;
    return {
      _id,
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
    };
  });
}

function destructureOneCar(car) {
  const {
    _id,
    location: { streetAdress, city, province, postalCode },
    carSpecs: { year, make, model, odometer },
    availability: { advanceNoticeHours, maxDurationDays },
    transmission,
    image,
    description,
    licensePlate,
    dailyPrice,
    owner,
  } = car[0];
  return {
    _id,
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
  };
}

module.exports = {
  buildCar,
  destructureCars,
  destructureOneCar,
};
