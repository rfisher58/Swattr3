const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8081;
const passport = require('passport')
const cors = require("cors");
const morgan = require('morgan')

app.use(cors());
app.use(morgan());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./auth/auth.js")(passport)
// initilize passwport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Add routes, both API and view
require('./routes/api-routes')(app);
require("./routes/auth-routes")(app, passport);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactNotes");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




