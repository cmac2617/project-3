const router = require("express").Router();
const orm = require("../../controllers/controller")

router.post("/route", function (req, res) {
    console.log(req.body)
    res.json(req.body)
})
router.route("/newplace").post(orm.create)

module.exports = router;
