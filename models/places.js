const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const database = new Schema({
  
});

const Database = mongoose.model("Database", database);

module.exports = database;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true }
});

const  Places = mongoose.model("Places", placesSchema);

module.exports = Places;