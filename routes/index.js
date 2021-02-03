const router = require("express").Router();
// const orm = require("../../controllers/controller");
const dbuser = require("../models/user");
const dbplaces = require("../models/places");
const User = require("../models/user");

router.post("/api/route", function (req, res) {
    console.log(req.body)
    res.json(req.body)
})
router.post("/api/newplace", function (req, res) {
    console.log(req.body)
    dbplaces.create(req.body)
    res.json(req.body)
})

router.post("/api/newuser", function (req, res) {
    console.log(req.body)
    dbuser.create(req.body)
    res.json(req.body)
})

router.post("api/login", function (req, res) {
    if (!email || !password)
    return (res.status(400).json({ msg: "Not all fields are filled in." }));
    User.findOne({email: email});
    

})
module.exports = router;
