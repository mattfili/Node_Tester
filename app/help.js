module.exports = function () {
	printHelpMessage();
	process.exit(1)
}

function printHelpMessage() {
  console.log('V1.0.0');
  console.log('intronode');
  console.log('');
  console.log('usage:');
  console.log('');
  console.log('--help     print out this message');
  console.log('--name={name}     input name');
  console.log('');
}