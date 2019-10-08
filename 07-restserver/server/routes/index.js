/*jshint esversion: 2017 */
const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./login'));

module.exports = app;