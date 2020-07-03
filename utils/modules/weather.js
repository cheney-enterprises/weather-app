const geocode = require('./geocode')
const forecast = require('./forecast')
const chalk = require('chalk')

const weather = function(location) {
  return function(req, res, next) {
    if (typeof location !== "string" && typeof location !== "object") {
    console.error(
      chalk.red.bold.italic(
        new Error(
          "The location parameter must be a string with the location/address/city/etc, or it must be an array with the latitude and longitude"
        )
      )
    );
  }
  const start = new Date();
  geocode(location, (err, data) => {
    forecast(data, (err, weatherRes) => {
      console.log(weatherRes);
      const end = new Date();
      console.log((end - start) / 1000 + " seconds to return data");
      req.app.locals.weather = weatherRes;
      res.send(req.app.locals.weather);
    });
  });
  }
};

module.exports = weather