const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');

const router = express.Router();

router.use(checkIfLoggedIn);

router.get('/driver/:id', (req, res, next) => {
  res.status(200).json({
    demo: 'Welcome to a protected route',
  });
});

module.exports = router;