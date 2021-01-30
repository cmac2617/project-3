import axios from "axios";

export default {
  getEvents: () =>
  axios ({
    'method': "GET",
    'baseURL': "http://api.eventful.com/rest/events/search?",
    'headers': {
      'event-type': "",
      'apiKEY': "42qSvp8KVT9fbB65",
      'consumerKEY': "c0e3539f8a4bef844701",
      
    },
    'params': {
        'search': "parameter",
    },
  })
}


var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://api.eventful.com/rest/events/search?...&keywords=comedy&location=Cleveland&date=Future&app_key=42qSvp8KVT9fbB65&oauth_consumer_key=c0e3539f8a4bef844701&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1612015547&oauth_nonce=T5JBIcFGLi1&oauth_version=1.0&oauth_signature=kb12yIQ8RxlArCxdh2cbc5TC2EQ=',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
