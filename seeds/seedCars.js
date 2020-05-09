// require('dotenv').config();

// const mongoose = require('mongoose');
// const Car = require('../models/Car');

// mongoose
//   .connect(`${process.env.MONGODB_URI}`, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err);
//   });

// const cars = [
//   {
    
//   },
// ];

// Car.create(cars, err => {
//   if (err) {
//     throw err;
//   }
// 	console.log(`Created ${cars.length} cars`);
//   mongoose.connection.close();
// });