/* ==========================
// TODO
// ==========================
CURRENT: - Test and bugfix

SOMEDAY:
- Add functionality for breakfast and lunch as well
*/

// ==========================
// IMPORTS
// ==========================
// NPM Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

// Config Import - if working locally
let config;
try {
  config = require('./config');
} catch (e) {
  console.log("Config was not imported. This probably means you are not working locally.");
  console.log(e);
}

// Route Imports
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');

// Model Imports
const User = require('./models/user');



// ==========================
// DEV
// ==========================



// ==========================
// CONFIG
// ==========================
// Body Parser Config
app.use(bodyParser.urlencoded({extended: true}));

// Express Config
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Method Override Config
app.use(methodOverride('_method'));

// Mongoose Config
try {
  mongoose.connect(config.db.connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
} catch (e) {
  console.log("Could not connect to DB with config - likely not working locally.");
  mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
}
mongoose.Promise = global.Promise;

// Express Session Config
app.use(expressSession({
	secret: "sdf987ysdf98f7tvs76dfr865arsfaa0sdf7gs87g2kaufydgasd",
	resave: false,
	saveUninitialized: false
}));

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

// State Config
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
})

// Use Routes
app.use('/', authRoutes);
app.use('/', mainRoutes);


// ==========================
// LISTEN
// ==========================
app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log("MealApp server is running");
});
