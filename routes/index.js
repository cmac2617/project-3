const router = require("express").Router();
const orm = require("../controllers/controller");
const users = require("./users.js");
const express = require("express");
const app = express();

router.post("/route", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});
router.route("/newplace").post(orm.create);

app.use("/api/users", users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = router;
