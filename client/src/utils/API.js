import axios from "axios";

export default {
  // Save a place.
  savePlace: function (placeData) {
    return axios.post("/api/newplace", placeData)
  },
  goRoute: function (placeData) {
    return axios.post("/api/route", placeData)
  },
  saveUser: function (userData) {
    console.log("Works")
    return axios.post("/api/newuser", userData)
  },
  login: function (userData) {
    console.log("Works")
    return axios.post("/api/login", userData)
  },
  findPlaceByCategory: async function (term) {
    console.log("Category API call (frontend)")
    var data = await axios.post("/api/findplacecategory", term)
    console.log(data)
    return data

  },
  findPlaceByState: async function (term) {
    console.log("State API call (frontend)")
    var data = await axios.post("/api/findplacestate", term)
    console.log(data)
    return data
  },
  createFilteredList: async function (term) {
    console.log("Filtered list API call (frontend)")
    var data = await axios.post("/api/createfilteredlist", term)
    console.log(data)
    return data
  }
}