import axios from "axios";

const BASEURL = "api.eventful.com/rest/events/search?&q="
const APIKEY = "&app_key=42qSvp8KVT9fbB65"

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
