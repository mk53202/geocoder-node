// https://www.npmjs.com/package/node-geocoder

// Libs
var NodeGeocoder = require('node-geocoder')
var config = require('dotenv').config({path: './virtualearth.key'}); // For API key

var options = {
  provider: 'virtualearth',
  apiKey: process.env.VIRTUALEARTH_API_KEY
}

var geocoder = NodeGeocoder(options);

// Or using Promise
geocoder.geocode('245 W LINCOLN AV,MKE')
  .then(function(res) {
    console.log(res[0].latitude + "," + res[0].longitude)
  })
  .catch(function(err) {
    console.log(err);
  });
