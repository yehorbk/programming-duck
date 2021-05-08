'use strict';

const Utils = require('./utils/utils');
const ConfigManager = require('./utils/config-manager');
const ClientMessage = require('./models/client-message');

function AppService() {
  this.config = ConfigManager.get('telegram');
}

AppService.prototype.start = function (context) {
  context.reply(ClientMessage.GREETING);
};

AppService.prototype.success = function (context) {
  const messages = ['Yeah!', 'Like I said - easy', 'Excellent!'];
  context.reply(messages[Utils.random(0, messages.length)]);
};

module.exports = new AppService();
