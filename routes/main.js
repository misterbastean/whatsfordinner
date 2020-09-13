const express = require('express');
const router = express.Router();

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
  // Shuffle meals array
  // Note that this will often have back-to-back meals - need to fix in the future.
  meals = meals.sort(() => Math.random() - 0.5);
  console.log(meals);
  res.render('calendar', {meals});
});

// 404
router.get("*", (req, res) => {
  res.send("404. Does not exist.")
})


module.exports = router;
