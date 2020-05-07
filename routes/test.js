const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    working: 'API is working properly',
  });
});

module.exports = router;
