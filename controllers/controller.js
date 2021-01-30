const db = require("../models/places");

// Defining methods for the controller.

module.exports = {
    create: function(req, res) {
        console.log("in create")
        db.create(req.body)
        .then(dbModel => res.json(dbModel))
    },
}
