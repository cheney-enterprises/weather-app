// @ts-nocheck
const express = require('express')
const path = require("path");
const wxIcon = require("../utils/modules/wxIcon")

let obj = {
  location: "Richmond, VA",
  current: {
    icon: 'tornado'
  },
  daily: {
    icon: 'thunderstorm'
  },
  hourly: {
    icon: 'clear-day'
  }
};

const app = express();

// define paths for express config
const publicPath = path.join(__dirname, "../public");

// setup view engine - pug
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

// setup static file service
app.use(express.static(publicPath, {
    extensions: ['html','htm']
}))

// setup routes for mainRoute
// @ts-ignore
app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Weather App",
    name: {
      first: "Eric",
      middle: "Michael",
      last: "Cheney"
    },
    location: "Richmond, VA"
  });
})

// @ts-ignore
app.get("/about", (req, res, next) => {
  res.render("about", {
    title: "Weather App",
    name: {
      first: "Eric",
      middle: "Michael",
      last: "Cheney"
    }
  });
});

// @ts-ignore
app.get("/help", (req, res, next) => {
  res.render("help", {
    title: "Weather App",
    name: "Eric"
  });
});

// @ts-ignore
app.get("/help/*", (req, res, next) => {
  res.render("404", {
    title: "Error: Help Page does nto exist",
    errorMessage: "There is no help article for this subject"
  });
});

// @ts-ignore
app.get("/wx", (req, res, next) => {
  res.render("weather", {
    hourlyIcon: wxIcon(obj.hourly.icon),
    currentIcon: wxIcon(obj.current.icon),
    dailyIcon: wxIcon(obj.daily.icon),
    location: obj.location
      
  });
})

module.exports = app