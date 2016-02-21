'use strict';

var config = require('./config.js');
var exec = require('child_process').execSync;
var generate = require('./generate.js');
var moment = require('moment');

module.exports = () => {
   generate();

   var branch = exec('git name-rev --name-only HEAD').toString().trim();
   var sha = exec('git rev-parse HEAD').toString().trim();
   var msg = 'documentation for ' + branch + ' : ' + sha;

   console.log('pushing updated documentation to the repository...');
   process.chdir(config.outputDirectory);
   try {
      exec('git add --all');
      exec('git commit -m "' + msg + '"');
      exec('git push origin ' + config.branch);
   }
   finally {
      process.chdir('..');
   }
};
