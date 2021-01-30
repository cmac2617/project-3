const router = require("express").Router();
const orm = require("../../controllers/controller")

router.post("/api/route", function (req, res) {
    console.log(req.body)
    res.json(req.body)
})
router.route("/api/newplace").post(orm.create)

module.exports = router;
