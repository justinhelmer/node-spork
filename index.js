(function() {
  'use strict';

  var chalk = require('chalk');
  console.log(chalk.bold.yellow('[WARNING]:', 'The `node-spork` project has moved to `spork`.'));
  module.exports = require('spork');
})();
