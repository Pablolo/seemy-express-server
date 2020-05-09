require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/User');

const users = [
  {
    firstName: 'Pablo',
    lastName: 'Olon',
    email: 'pablo@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/pablo-olon.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Ruben',
    lastName: 'Gallego',
    email: 'ruben@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/ruben-gallego.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Noelia',
    lastName: 'Villarejo',
    email: 'noelia@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/noelia-villarejo.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Miguel',
    lastName: 'Villena',
    email: 'miguel@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/miguel-villena.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Maria',
    lastName: 'Azorin',
    email: 'maria@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/maria-azorin.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Laura',
    lastName: 'Recio',
    email: 'laura@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/laura-recio.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Hector',
    lastName: 'Barrera',
    email: 'hector@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/hector-barrera.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Francisco',
    lastName: 'Cuadrado',
    email: 'francisco@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/francisco-cuadrado.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Domingo',
    lastName: 'Duran',
    email: 'domingo@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/domingo-duran.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Andrea',
    lastName: 'Porta',
    email: 'andrea@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/andrea-porta.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Ana',
    lastName: 'Gongora',
    email: 'ana@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/ana-gongora.jpg',
    mobileNumber: '6834345001',
  },
  {
    firstName: 'Alberto',
    lastName: 'Vilas',
    email: 'alberto@gmail.com',
    hashedPassword: '$2b$10$EG0myz9nmkPbuF8FSa5A0uiHvA2uLK.cBTcsOMVG/ao6YCLZH1k9.',
    profilePhoto: '/images/users/alberto-vilas.jpg',
    mobileNumber: '6834345001',
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

User.create(users, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
