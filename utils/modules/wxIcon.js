const {
  tornado,
  thunderstorm,
  partlyCloudyNight,
  partlyCloudyDay,
  cloudy,
  clearDay,
  clearNight,
  fog,
  wind,
  sleet,
  rain,
  hail
} = require("./svgPaths");


const wxIcon = icon => {
  switch (icon) {
    case "tornado":
      return tornado;
      break;
    case "thunderstorm":
      return thunderstorm;
      break;
    case "partly-cloudy-night":
      return partlyCloudyNight;
      break;
    case "partly-cloudy-day":
      return partlyCloudyDay;
      break;
    case "cloudy":
      return cloudy;
      break;
    case "clear-day":
      return clearDay;
      break;
    case "clear-night":
      return clearNight;
      break;
    case "fog":
      return fog;
      break;
    case "wind":
      return wind;
      break;
    case "sleet":
      return sleet;
      break;
    case "rain":
      return rain;
      break;
    case "hail":
      return hail;
      break;
    default:
      return clearDay;
      break;
  }
};

module.exports = wxIcon