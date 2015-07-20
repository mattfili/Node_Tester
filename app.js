#!/usr/bin/env node

var argv = require('yargs')
  .argv;

var prompt = require('prompt');

if (argv.help){
  console.log('V1.0.0');
  console.log('intronode');
  console.log('');
  console.log('usage:');
  console.log('');
  console.log('--help     print out this message');
  console.log('--name={name}     input name');
  console.log('');
  process.exit(1);
}


if (argv.name) {
	printtHelloMessage(argv.name)
} else {
	prompt.message = prompt.delimiter =''
	prompt.start()
	prompt.get('name', function (err, result) {
		printHelloMessage(result.name);
});

}

function printHelloMessage(name) {
console.log('hello ' + name);
process.stdout.write('hello   ' + name);

}


// process.exit(1);

