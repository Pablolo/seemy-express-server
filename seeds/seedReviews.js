require('dotenv').config();

const mongoose = require('mongoose');
const Review = require('../models/Review');

const reviews = [
  {
    carId: '5eb69e9f7b942565bf0c82ef',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '5',
    publisherId: '5eb67da90fc2e7433c484e33',
  },
  {
    carId: '5eb69e9f7b942565bf0c82ef',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '4',
    publisherId: '5eb67da90fc2e7433c484e34',
  },
  {
    carId: '5eb69e9f7b942565bf0c82ef',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '5',
    publisherId: '5eb67da90fc2e7433c484e35',
  },
  {
    carId: '5eb69e9f7b942565bf0c82ef',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '3',
    publisherId: '5eb67da90fc2e7433c484e36',
  },
  {
    carId: '5eb69e9f7b942565bf0c82ef',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '5',
    publisherId: '5eb67da90fc2e7433c484e37',
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
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

Review.create(reviews, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${reviews.length} reviews`);
  mongoose.connection.close();
});
