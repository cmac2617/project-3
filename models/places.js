const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  entryFee: { type: Boolean, required: true},
  category: { type: String, required: true }
});

const  Places = mongoose.model("Places", placesSchema);

module.exports = Places;