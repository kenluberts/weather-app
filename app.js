// const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address, argv.apikey, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

