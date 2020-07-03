const request = require("request");
const { mapboxApiKey } = require("../env");

const geocode = (addr, cb) => {
  const loc = encodeURIComponent(addr);

  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapboxApiKey}&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err || body.features.length === 0) {
      if (err) {
        cb("unable to connect to location services");
      } else {
        cb("unable to find this location. Try another search.");
      }
    } else {
      cb(undefined, {
        lat: body.features[0].center[1],
        lng: body.features[0].center[0],
        loc: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
