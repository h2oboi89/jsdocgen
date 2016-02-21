#!/usr/bin/env node

'use strict';

var index = require('../index.js');

var clone = index.clone;
var generate = index.generate;
var publish = index.publish;

var help = () => {
   console.log('jsdocgen [clone|generate|publish]');
}

var args = process.argv.slice(2);

if(args.length == 0) {
   help();
}
else {
   switch(args[0]) {
      case 'clone':
         clone();
         break;
      case 'generate':
         generate();
         break;
      case 'publish':
         publish();
         break;
      default:
         help();
         break;
   }
}
