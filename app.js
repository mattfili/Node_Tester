#!/usr/bin/env node

var argv = require('yargs').argv
var prompt = require('prompt');

var help = require('./app/help')

if (argv.help) {
	help();
}


prompt.override = argv;
prompt.start();
prompt.message = prompt.delimiter =''
prompt.get('name', function (err, result) {
	printHelloMessage(result.name);
});



function printHelloMessage(name) {
console.log('hello ' + name);
process.stdout.write('hello   ' + name);

}


// process.exit(1);

