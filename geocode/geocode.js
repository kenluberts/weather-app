const request = require('request');
const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

var geocodeAddress = (address, apikey, callback) => {
    var encodedAddress = encodeURIComponent(address);
    var apiKey = apikey;

    request({
        url: `${apiUrl}?address=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO RESULTS') {
            callback('Unable to find address.');
        } else if (body.status === 'OK') {  
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });              
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

