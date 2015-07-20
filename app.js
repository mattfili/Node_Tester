#!/usr/bin/env node

var argv = require('yargs').argv
var prompt = require('prompt');
var bigfile = require('./app/bigfile');
var fs = require('fs');

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
	var options = {encoding: 'utf8'}
	var message = fs.readFileSync('./app/bigfile', options)
	console.log(message)
	process.stdout.write('hello   ' + name + 'Again\n');
}


// process.exit(1);

