// geo.js
// https://www.npmjs.com/package/node-geocoder

// Libs
var NodeGeocoder = require('node-geocoder')
var config = require('dotenv').config({path: './virtualearth.key'}); // For API key

var options = {
  provider: 'virtualearth',
  apiKey: process.env.VIRTUALEARTH_API_KEY
}

var geocoder = NodeGeocoder(options);

geocoder.geocode('3209 N BARTLETT AV,MKE')
  .then(function(res) {
    console.log(res[0].latitude + "," + res[0].longitude)
    // console.log(res)
      // [ { latitude: 43.07595,
      //     longitude: -87.88941,
      //     country: 'United States',
      //     city: 'Milwaukee',
      //     state: 'WI',
      //     zipcode: '53211',
      //     streetName: '3209 N Bartlett Ave',
      //     formattedAddress: '3209 N Bartlett Ave, Milwaukee, WI 53211',
      //     provider: 'virtualearth' } ]
  })
  .catch(function(err) {
    console.log(err);
  });
