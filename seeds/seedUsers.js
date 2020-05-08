require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');

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

const users = [
  {
    firstName: 'Pablo',
    lastName: 'Olon',
    email: 'pablo@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '',
    mobileNumber: '',
  },
];

User.create(users, err => {
  if (err) {
    throw err;
  }
	console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
