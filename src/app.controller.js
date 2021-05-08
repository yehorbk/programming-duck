'use strict';

const { Telegraf } = require('telegraf');

const AppService = require('./app.service');
const ConfigManager = require('./utils/config-manager');

function AppController() {
  this.config = ConfigManager.get('telegram');
  this.bot = new Telegraf(this.config.token);
  this.service = AppService;
}

AppController.prototype.listen = function () {
  this.bot.start(context => this.service.start(context));
  this.bot.launch();
};

module.exports = new AppController();
