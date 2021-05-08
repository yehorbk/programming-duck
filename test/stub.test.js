'use strict';

const mocha = require('mocha');
const assert = require('assert');

mocha.describe('Stub unit', () => {
  mocha.it('Should pass', () => {
    assert.ok('Success');
  });
});
