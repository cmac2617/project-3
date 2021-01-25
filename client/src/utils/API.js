import axios from "axios";

var config = {
  method: 'get',
  url: 'http://api.eventful.com/rest/events/search?...&keywords=sports&location=San+Diego&date=Future&app_key=42qSvp8KVT9fbB65&oauth_consumer_key=c0e3539f8a4bef844701&oauth_token=42qSvp8KVT9fbB65&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1611426960&oauth_nonce=uaXHb3HwGVN&oauth_version=1.0&oauth_signature=w2avj4SksQUvdL2xhz2Ek0DrPlo=',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export default {
    getEvents: function () {
        return axios(config)
    }
}