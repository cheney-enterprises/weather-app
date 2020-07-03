const express = require("express");
const forecast = require("../utils/modules/forecast");
const geocode = require("../utils/modules/geocode");
const log = require("../utils/modules/log");
const wxIcon = require("../utils/modules/wxIcon");

const app = express();
const route = express.Router();

route.get("", (req, res, next) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

route.get("/:location", (req, res, next) => {
  const loc = req.params.location;
  const locals = res.locals;
  const weather = (location) => {
    if (typeof location !== "string" && typeof location !== "object") {
      let err = new Error(
        "The location parameter must be a string with the location/address/city/etc, or it must be an array with the latitude and longitude",
      );
      console.error(
        chalk.red.bold.italic(err),
      );
      next(err);
    }
    geocode(location, (err, data) => {
      if (err) {
        next(err);
      } else {
        forecast(data, (err, weatherRes) => {
          if (err) {
            next(err);
          } else {
            //console.log(weatherRes.body.currently);
            locals.currently = weatherRes.body.currently;
            locals.hourly = weatherRes.body.hourly;
            locals.daily = weatherRes.body.daily;
            locals.location = data.loc;
            //log(locals.weather)
            // return;
            next();
          }
        });
      }
    });
  };
  weather(loc);
});

route.get("/*", (req, res) => {
  //console.log(req.app.locals.currentIcon);
  //res.send(wx)
  res.render("weather", {
    // currently: res.locals.currently,
    // hourly: res.locals.hourly,
    // daily: res.locals.daily,
    currentIcon: wxIcon(res.locals.currently.icon),
    hourlyIcon: wxIcon(res.locals.hourly.icon),
    dailyIcon: wxIcon(res.locals.daily.icon),
    currentLocation: res.locals.location,
  });
});

route.use((err, req, res) => {
  if (err) {
    res.render("404", {
      errorMessage: err,
    });
  } else {
    res.render("404", {
      errorMessage: "something went wrong! Please try again.",
    });
  }
});

app.use("/weather", route);

module.exports = app;
