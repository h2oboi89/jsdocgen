'use strict';

var fs = require('fs');
var path = require('path');

/** The package.json file from the project we are generating documentation for */
var packageInfo = JSON.parse(fs.readFileSync('package.json'));

/** Check to see if we are running on Windows */
var isWin = /^win/.test(process.platform);

/** Directory we are running out of */
var directory = process.argv[1];

if(isWin) {
   var moduleDirectory = path.dirname(path.dirname(directory));
}
else {
   var moduleName = path.basename(directory);
   var moduleDirectory = path.join(path.dirname(path.dirname(directory)), moduleName);
}

/** The docGen jsdoc.json file */
var jsDocConfigFile = path.join(moduleDirectory, 'jsdoc.json');

module.exports = {
   repository: packageInfo.repository.url,
   outputDirectory: './doc',
   branch: 'gh-pages',
   jsDocConfig: jsDocConfigFile,
};
