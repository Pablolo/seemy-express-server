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

module.exports = buildCar;
