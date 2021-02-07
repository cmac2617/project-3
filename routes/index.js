const router = require("express").Router();
// const orm = require("../../controllers/controller");
const dbuser = require("../models/user");
const dbplaces = require("../models/places");
const User = require("../models/user");
var passport = require('passport')

// Passport requirements


// Passport Routes
router.post("/api/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json("username incorrect") }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log(req.user)
      console.log(user.email)
      return res.json(user);
    });
  })(req, res, next);
});

// Database routes
// if(req.isAuthenticated()) {
//   User.findById(req.user._id)

// } else {
//   res.json("not logged in")
// }

router.post("/api/route", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});
router.post("/api/newplace", function (req, res) {
  console.log(req.body);
  dbplaces.create(req.body);
  res.json(req.body);
});

router.post("/api/newuser", function (req, res) {
  console.log(req.body);
  dbuser.create(req.body);
  res.json(req.body);
});

router.post("/api/findplacetitle", function(req, res) {
  console.log("HERE WE ARE");
  console.log(req.body)
  dbplaces.find(req.body).then(results => console.log(results))
  
})


module.exports = router;
