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
  },
  login: function(userData) {
    console.log("Works")
    return axios.post("/api/login", userData)
  },
  findPlaceTitle: function(term) {
    console.log("works")
    return axios.post("/api/findplacetitle", term)

  },
  findPlaceCategory: function(term) {

  },
  findAll: function(term) {

  },
  test: function(data) {
    return axios.post("/test/route", data)
  }
  };