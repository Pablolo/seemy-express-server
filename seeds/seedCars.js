require('dotenv').config();

const mongoose = require('mongoose');
const Car = require('../models/Car');

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const cars = [
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
  {
    location: {
      streetAdress: 'General Mitre, 23',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08023',
    },
    carSpecs: {
      year: '2007',
      make: 'Ferrari',
      model: '430',
      odometer: '23000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/ferrari-430-2007.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb45a90f807f940ad758a89',
    review: {
      carId: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      rating: '4',
      publisherId: '5eb67da90fc2e7433c484e35',
    },
  },
];

Car.create(cars, err => {
  if (err) {
    throw err;
  }
	console.log(`Created ${cars.length} cars`);
  mongoose.connection.close();
});