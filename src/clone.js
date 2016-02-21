'use strict';

var config = require('./config.js');
var exec = require('child_process').execSync;
var fs = require('fs');

var directoryExists = (outputDir) => {
   try {
      fs.accessSync(outputDir);
      return true;
   }
   catch(e) {
      return false;
   }
};

module.exports = () => {
   if(!directoryExists(config.outputDirectory)) {
      exec('git clone ' + config.repository + ' ' + config.outputDirectory);
   }

   process.chdir(config.outputDirectory);
   try {
      try {
         exec('git checkout ' + config.branch);
      }
      catch(e) {
         exec('git checkout --orphan ' + config.branch);
      }

      console.log('reset to HEAD...');
      exec('git reset --hard');

      try {
         exec('git pull origin ' + config.branch);
      }
      catch(e) {
         // can't pull from origin:<branch> until it exists...
      }
   }
   finally {
      process.chdir('..');
   }
};
