const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.status(200).json({
		demo: 'Welcome',
	});
});

module.exports = router;
