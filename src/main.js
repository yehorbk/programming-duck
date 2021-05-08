'use strict';

const AppController = require('./app.controller');

function Main() {}

Main.prototype.start = function () {
  AppController.listen();
};

module.exports = new Main();
