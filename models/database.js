const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const database = new Schema({
  
});

const Database = mongoose.model("Database", database);

module.exports = database;
