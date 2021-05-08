'use strict';

const fs = require('fs');

const Utils = require('./utils');

function ConfigManager() {
  this.path = '.config.json';
  this.context = JSON.parse(fs.readFileSync(this.path, { encoding: 'utf-8' }));
}

ConfigManager.prototype.get = function (section) {
  if (!section) {
    return this.context;
  }
  return this.context[section];
};

ConfigManager.prototype.setDocumentLink = function (value) {
  this.context.google.document_link = Utils.parseDocumentLink(value);
  fs.writeFileSync(this.path, JSON.stringify(this.context), {
    encoding: 'utf-8',
  });
};

module.exports = new ConfigManager();
