const express = require("express");

const api = express.Router();

api.get("", (req, res, next) => {
  res.send({ api: "This is the api Route" });
});

module.exports = api;
