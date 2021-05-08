'use strict';

const ConfigManager = require('./utils/config-manager');
const ClientMessage = require('./models/client-message');

function AppService() {
  this.config = ConfigManager.get('telegram');
}

AppService.prototype.start = function (context) {
  context.reply(ClientMessage.GREETING);
};

module.exports = new AppService();
