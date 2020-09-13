const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/calendar", (req, res) => {
  res.render('calendar');
});

// 404
router.get("*", (req, res) => {
  res.send("404. Does not exist.")
})


module.exports = router;
