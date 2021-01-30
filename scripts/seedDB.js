const mongoose = require("mongoose");
const places = require("../models/places");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/database"
);

const seedData = [
  {
    title: "Mcdonalds",
    location: "25 miles south"
  },
  {
    title: "Chipolte",
    location: "round the corner"
  },
  {
    title: "Burger King",
    location: "over the hill"
  }
];
places.collection.insertMany(seedData)