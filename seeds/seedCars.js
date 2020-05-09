require('dotenv').config();

const mongoose = require('mongoose');
const Car = require('../models/Car');

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
  },
  {
    location: {
      streetAdress: 'Comandante Izarduy 67',
      city: 'Cornella de Llobregat',
      province: 'Barcelona',
      postalCode: '08940',
    },
    carSpecs: {
      year: '2013',
      make: 'Tesla',
      model: 'Model S',
      odometer: '41000',
    },
    transmission: 'Automatic',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '2',
    },
    image: '/images/cars/tesla-models-2013.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '021732L',
    dailyPrice: '185',
    owner: '5eb67da90fc2e7433c484e33',
  },
  {
    location: {
      streetAdress: 'Benito Guinea 32',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08001',
    },
    carSpecs: {
      year: '2009',
      make: 'Porsche',
      model: 'Cayman',
      odometer: '602000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '1',
    },
    image: '/images/cars/porsche-cayman-2009.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '290',
    owner: '5eb67da90fc2e7433c484e34',
  },
  {
    location: {
      streetAdress: 'Pl. Virgen Blanca 56',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08021',
    },
    carSpecs: {
      year: '2008',
      make: 'Porsche',
      model: '911',
      odometer: '194000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '3',
    },
    image: '/images/cars/porsche-911-2008.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '330',
    owner: '5eb45a90f807f940ad758a89',
  },
  {
    location: {
      streetAdress: 'Benito Guinea 50',
      city: 'Mataró',
      province: 'Barcelona',
      postalCode: '08300',
    },
    carSpecs: {
      year: '2018',
      make: 'Mercedes',
      model: 'C Class',
      odometer: '50000',
    },
    transmission: 'Automatic',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '5',
    },
    image: '/images/cars/mercedes-cclass-2018.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '450',
    owner: '5eb67da90fc2e7433c484e35',
  },
  {
    location: {
      streetAdress: 'Escoles Pies 45',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08017',
    },
    carSpecs: {
      year: '2019',
      make: 'McLaren',
      model: '570S',
      odometer: '12000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '1',
    },
    image: '/images/cars/mclaren-570s-2019.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '990',
    owner: '5eb45a90f807f940ad758a89',
  },
  {
    location: {
      streetAdress: 'Martinez de la Rosa 145',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08012',
    },
    carSpecs: {
      year: '2018',
      make: 'McLaren',
      model: '570S',
      odometer: '39500',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '2',
    },
    image: '/images/cars/mclaren-570s-2018.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '885',
    owner: '5eb67da90fc2e7433c484e37',
  },
  {
    location: {
      streetAdress: 'Evarist Arnús 95',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08014',
    },
    carSpecs: {
      year: '2014',
      make: 'Maseratti',
      model: 'Gran Turismo',
      odometer: '137000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/maseratti-granturismo-2014.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '600',
    owner: '5eb67da90fc2e7433c484e38',
  },
  {
    location: {
      streetAdress: 'Portal del Angel 2',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08002',
    },
    carSpecs: {
      year: '2018',
      make: 'Lamborghini',
      model: 'Huracan',
      odometer: '108000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '1',
    },
    image: '/images/cars/lamborghini-huracan-2018.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '740',
    owner: '5eb67da90fc2e7433c484e39',
  },
  {
    location: {
      streetAdress: 'Roc Boronat 50',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08005',
    },
    carSpecs: {
      year: '2016',
      make: 'Jaguar',
      model: 'F Type',
      odometer: '200000',
    },
    transmission: 'Automatic',
    availability: {
      advanceNoticeHours: '48',
      maxDurationDays: '4',
    },
    image: '/images/cars/jaguar-ftype-2016.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '350',
    owner: '5eb67da90fc2e7433c484e3a',
  },
  {
    location: {
      streetAdress: 'Passeig del Taulat 256',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08005',
    },
    carSpecs: {
      year: '1966',
      make: 'Jaguar',
      model: 'E Type',
      odometer: '108000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '1',
    },
    image: '/images/cars/jaguar-etype-1966.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '500',
    owner: '5eb67da90fc2e7433c484e3b',
  },
  {
    location: {
      streetAdress: 'Compte Borrell 132',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08015',
    },
    carSpecs: {
      year: '2019',
      make: 'Dodge',
      model: 'Challenger',
      odometer: '59300',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '2',
    },
    image: '/images/cars/dodge-challenger-2019.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '360',
    owner: '5eb67da90fc2e7433c484e3c',
  },
  {
    location: {
      streetAdress: 'Aristides Maiol 76',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08028',
    },
    carSpecs: {
      year: '2018',
      make: 'Dodge',
      model: 'Challenger',
      odometer: '72000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/dodge-challenger-2018.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '295',
    owner: '5eb67da90fc2e7433c484e3d',
  },
  {
    location: {
      streetAdress: 'Ganduxer 66',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08021',
    },
    carSpecs: {
      year: '2016',
      make: 'Chevrolet',
      model: 'Corvette',
      odometer: '189000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '3',
    },
    image: '/images/cars/chevrolet-corvette-2016.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '220',
    owner: '5eb67da90fc2e7433c484e3c',
  },
  {
    location: {
      streetAdress: 'Passeig de la Reina Elisenda 66',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08034',
    },
    carSpecs: {
      year: '1955',
      make: 'Cadillac',
      model: 'DeVille',
      odometer: '252000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '1',
    },
    image: '/images/cars/cadillac-deville-1955.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '395',
    owner: '5eb67da90fc2e7433c484e3b',
  },
  {
    location: {
      streetAdress: 'Verdi 108',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08012',
    },
    carSpecs: {
      year: '2016',
      make: 'BMW',
      model: 'i8',
      odometer: '170000',
    },
    transmission: 'Automatic',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '2',
    },
    image: '/images/cars/bmw-i8-2016.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '610',
    owner: '5eb67da90fc2e7433c484e3a',
  },
  {
    location: {
      streetAdress: 'Diagonal 490',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08006',
    },
    carSpecs: {
      year: '2015',
      make: 'Audi',
      model: 'R8',
      odometer: '181000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '24',
      maxDurationDays: '3',
    },
    image: '/images/cars/audi-r8-2015.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '350',
    owner: '5eb67da90fc2e7433c484e39',
  },
  {
    location: {
      streetAdress: 'Passeig Sant Joan 2',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08010',
    },
    carSpecs: {
      year: '1987',
      make: 'AM',
      model: 'General Humvee',
      odometer: '330000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '48',
      maxDurationDays: '1',
    },
    image: '/images/cars/AM-General-Humvee-1987.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '640',
    owner: '5eb67da90fc2e7433c484e38',
  },
  {
    location: {
      streetAdress: 'Gran Via de les Corts Catalanes 588',
      city: 'Barcelona',
      province: 'Barcelona',
      postalCode: '08011',
    },
    carSpecs: {
      year: '2015',
      make: 'Alfa Romeo',
      model: '4C',
      odometer: '105000',
    },
    transmission: 'Manual',
    availability: {
      advanceNoticeHours: '12',
      maxDurationDays: '2',
    },
    image: '/images/cars/alfaromeo-4c-2015.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    licensePlate: '734633M',
    dailyPrice: '530',
    owner: '5eb67da90fc2e7433c484e37',
  },
];

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // return Car.insertMany(cars);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

Car.create(cars, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${cars.length} cars`);
  mongoose.connection.close();
});
