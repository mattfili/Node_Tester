#!/usr/bin/env node

var argv = require('yargs').argv
var prompt = require('prompt');
var bigfile = require('./app/bigfile');
var fs = require('fs');
var help = require('./app/help')
var zipFile = require('./app/zipFile.js');
var csvParse = require('./app/csvParse.js');

if (argv.help) {
	help();
}

if (argv.file) {
	zipFile(argv.file)
}

if (argv.csv) {
	csvParse(argv.csv);
}


prompt.override = argv;
prompt.start();
prompt.message = prompt.delimiter =''
prompt.get('name', function (err, result) {
	printHelloMessage(result.name);
});



function printHelloMessage(name) {
	console.log('hello ' + name);
	// READ OUT BIGFILE CONTENTS FASTER
	// var options = {encoding: 'utf8'} 
	// var message = fs.createReadStream('./app/bigfile', options)
	// message.pipe(process.stdout)
	// console.log(message)
	process.stdout.write('hello   ' + name + 'Again\n');
}


// process.exit(1);

