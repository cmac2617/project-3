const router = require("express").Router();
const orm = require("../../controllers/controller");
const users = require("./routes/users");

router.post("/route", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});
router.route("/newplace").post(orm.create);

app.use("/api/users", users);

module.exports = router;
