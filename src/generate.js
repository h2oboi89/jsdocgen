'use strict';

var clone = require('./clone.js');
var config = require('./config.js');
var exec = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

/**
 * Filters so we only get *.html files
 * Excludes the *.js.html files (stripping their whitespace breaks the line links)
 */
var filterFiles = (files) => {
   return files.filter((file) => {
      return /.*[^\.js]\.html/.test(file);
   });
};

var getOutputFiles = () => {
   return filterFiles(fs.readdirSync(config.outputDirectory));
};

/** JSDoc output has a lot of blank lines... */
var removeBlankLines = (file) => {
   var filePath = path.join(config.outputDirectory, file);
   var text = fs.readFileSync(filePath, 'utf8').replace(/^\s*[\r\n]/gm, '');
   fs.writeFileSync(filePath, text);
};

module.exports = () => {
   clone();

   console.log('generating documentation...');
   exec('jsdoc ./src -R ./README.md -c ' + config.jsDocConfig);

   console.log('cleaning up extra whitespace...');
   var files = getOutputFiles();

   for(var file of files) {
      removeBlankLines(file);
   }
};
