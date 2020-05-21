const express = require('express');
const bcrypt = require('bcrypt');

const { check, validationResult } = require('express-validator');
const { checkEmailAndPasswordNotEmpty } = require('../middlewares');

const User = require('../models/User');

const bcryptSalt = 10;

const router = express.Router();

router.get('/whoami', (req, res) => {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser);
  } else {
    res.status(401).json({ code: 'unauthorized' });
  }
});

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .normalizeEmail(),
    check('password').isLength({ min: 8 }),
    check('firstName').isLength({ min: 1 }),
    check('lastName').isLength({ min: 1 }),
  ],
  async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json({ errors: errors.array() });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(422).json({ code: 'This email is already registered' });
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const newUser = await User.create({ firstName, lastName, email, hashedPassword });
      req.session.currentUser = newUser;
      return res.json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/login', checkEmailAndPasswordNotEmpty, async (req, res, next) => {
  const { email, password } = res.locals.auth;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ code: 'not found' });
    }
    if (bcrypt.compareSync(password, user.hashedPassword)) {
      req.session.currentUser = user;
      return res.json(user);
    }
    return res.status(404).json({ code: 'not-found' });
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      next(err);
    }
    return res.status(204).send();
  });
});

module.exports = router;
