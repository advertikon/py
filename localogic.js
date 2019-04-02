var util = require( "util" )
require('request')({
  method: 'GET',
  url: 'https://api.locallogic.co/v1/profiles/g30_c2uggt9f',
  qs: {
    lat: 49.910257,
    lng: -116.905032,
  },
  headers: {
    'X-API-KEY': 'EF0RCsVvLS5isoKB6UNph5U2IavwSeEF2fHOTvEp'
  }
}, function (err, response, body) {
   var data = JSON.parse( body );

   console.log( util.inspect( data, false, null, false ) );
})