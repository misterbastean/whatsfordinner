const express = require('express');
const router = express.Router();
const User = require('../models/user');
const isLoggedIn = require('../utils/isLoggedIn');

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/calendar", (req, res) => {
  let meals = [];
  // Duplicate meals based on selected number
  req.body.meals.forEach((meal) => {
    for(let i = 0; i < meal.quantity; i++) {
      meals.push({
        name: meal.name,
        link: meal.link
      })
    }
  })
  // Shuffle meals array - Note that this will often have back-to-back meals; need to fix.
  meals = meals.sort(() => Math.random() - 0.5);
  console.log(meals);
  res.render('calendar', {meals});
});

router.get('/favorites', isLoggedIn, (req, res) => {
  res.render('favorites');
});

router.post('/favorites', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id);
  // Add all recipes to user
  req.body.meals.forEach((meal) => {
    user.favoriteMeals.push(meal);
  })
  user.save();
  res.redirect('/account')
});

router.post('/favorites_calendar', isLoggedIn, (req, res) => {
  console.log(req.body);
  res.render('index_favorites', {meals: req.body.meals});
})

// 404
router.get("*", (req, res) => {
  res.send("404. Does not exist.")
})


module.exports = router;
