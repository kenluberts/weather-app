const request = require('request');
const yargs = require('yargs');
const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const apiKey = '';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

// console.log(argv);

request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=225%20Liberty%20Street%20New%20York&key=AIzaSyDyv1T6XOG3iKhplDjIqkvLXLpuWu_DVVQ',
    url: `${apiUrl}?address=${encodedAddress}&key=${apiKey}`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(error);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
