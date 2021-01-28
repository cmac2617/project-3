import axios from "axios";

export default {
  // Save a place.
  savePlace: function(placeData) {
    return axios.post("api/newplace", placeData)
  }
  };