const request = require('request');
const chalk = require('chalk');
const { darkskyApiKey } = require('../env');

const forecast = ({lat,lng,loc}, cb) => {
    // const lat = data.lat || data[0];
    // const lng = data.lng || data[1];
    // const loc = data.loc || data[2] || null;
    const url = `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng}`;
    if (typeof cb !== 'function') {
        return console.error(chalk.red.bold.italic(new Error(
          chalk.green("The first parameter for this function must be either an ") + chalk.underline("OBJECT") + chalk.green(" or an ") + chalk.underline("Array.")+"\n\n" + chalk.green("If an ") + chalk.underline("OBJECT") + chalk.green(", it must have atleast 2 ")+"required keys " + chalk.green("- ") + "'lat'" + chalk.green(" for latitude, and ")+"'lng'"+chalk.green(" for longitude, with a 3rd "+ chalk.green.underline("optional")+" key, "+chalk.red.bold.italic("'loc'")+", for location. \n\nElse, if not an "+chalk.red.bold.underline.italic("OBJECT")+", the first parameter must be an "+chalk.red.bold.underline.italic("ARRAY")+" with atleast "+chalk.red.bold.italic("2 required values")+", with the "+chalk.red.bold.italic("1st value")+" - at position 0 - being "+chalk.red.bold.italic("latitude")+", and the "+chalk.red.bold.italic("2nd value")+" - at position 1 - being "+chalk.red.bold.italic("longitude")+" - a 3rd "+chalk.underline("optional")+" value - at position 2 - may be added, for the location value.")
        )));
    } else {
        request({ url, json: true }, (err, {body}) => {
          if (err || body.error) {
            if (err) {
              cb("unable to connect to location services");
            } else {
              cb(
                `Error Code: ${body.code} - Error Message: ${
                  body.error
                }`
              );
            }
          } else {
              cb(undefined, {
                body
            });
          }
        });
    }
    
}

module.exports = forecast

