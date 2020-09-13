const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
const isLoggedIn = require('../utils/isLoggedIn');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  const newUser = await User.register(new User({
    username: req.body.username,
    email: req.body.email
  }), req.body.password);
  console.log(newUser);

  passport.authenticate('local')(req, res, () => {
    res.redirect('/account');
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/account',
  failureRedirect: '/login',
  // successFlash: "Logged in successfully",
  // failureFlash: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/account', isLoggedIn, (req, res) => {
  res.render('account');
})

module.exports = router;
