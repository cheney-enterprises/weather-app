const express = require("express");
const subdomain = require("express-subdomain");
const pug = require("pug");

const app = express();
const main = require("../routes/mainRoute");
const api = require("../routes/apiRoute");
const weather = require("../routes/weatherRoute");

app.set("view engine", "pug");

app.use(main);
app.use(weather);

app.use(subdomain("api", api));

// error route for all not accounted for
app.get("*", (req, res) => {
  res.send("My 404 page");
});

app.listen(3000, () => console.log("intialized on 3000"));
