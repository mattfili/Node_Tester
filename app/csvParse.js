var fs = require('fs');
var csv = require('csv');

module.exports = function (filePath) {
	var csver;
	fs
	.createReadStream(filePath)
	.pipe(csv.parse())
	.pipe(csv.transform(function (err, data) {
		JSON.stringify(data)
		return data
	}))
	data.pipe(fs.createWriteStream(filePath + '.json'))
}
