const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false},
  address: { type: String, required: false },
  phone: { type: String, required: false },
  state: { type: String, required: true},
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  category: { type: String, required: true }
});

const  Places = mongoose.model("Places", placesSchema);

module.exports = Places;