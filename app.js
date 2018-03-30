const request = require('request');
const yargs = require('yargs');
const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        },
        k: {
            demand: true,
            alias: 'apikey',    
            describe: 'Google API Key',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var apiKey = argv.apikey;

// console.log(argv);

request({
    url: `${apiUrl}?address=${encodedAddress}&key=${apiKey}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connec to Google servers.');
    } else if (body.status === 'ZERO RESULTS') {
        console.log('Unable to find address.');
    } else if (body.status === 'OK') {        
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
