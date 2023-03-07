// require('./v1/users');
const express = require('express');
const router = express.Router();
var normalizedPath = require("path").join(__dirname, "v1");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  module.exports = require("./v1/" + file);
});