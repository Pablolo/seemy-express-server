const express = require('express');
const bcrypt = require('bcrypt');

const { checkEmailAndPasswordNotEmpty } = require('../middlewares');

const User = require('../models/User');

const bcryptSalt = 10;

const router = express.Router();

router.get('/whoami', (req, res, next) => {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser);
  } else {
    req.status(401).json({ code: 'unauthorized' });
  }
});

router.post('/signup', checkEmailAndPasswordNotEmpty, async (req, res, next) => {
  const { email, password } = res.locals.auth;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ code: 'email-already-registered' });
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({ email, hashedPassword });
    req.session.currentUser = newUser;
    return res.json(newUser);
  } catch (error) {
    next(error);
  }
});

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
