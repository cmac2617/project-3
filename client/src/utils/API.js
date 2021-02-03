import axios from "axios";

export default {
  // Save a place.
  savePlace: function(placeData) {
    return axios.post("/api/newplace", placeData)
  },
  goRoute: function(placeData) {
    return axios.post("/api/route", placeData)
  },
  saveUser: function(userData) {
    console.log("Works")
    return axios.post("/api/newuser", userData)
  }
  };