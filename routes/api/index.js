const router = require("express").Router();
const bookRoutes = require("./routes");

// Book routes
router.use("/routes", bookRoutes);

module.exports = router;
