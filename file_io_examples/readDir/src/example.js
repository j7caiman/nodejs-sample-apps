var fs = require('fs');

var path = './example/';
fs.readdir(path, function (err, files) {
	if (err) {
		throw err;
	}

	console.log(files.length + " files found.");
	files.forEach(function(fileName) {
		readAndOutputFile(fileName);
	});
});

function readAndOutputFile(fileName) {
	fs.readFile(path + fileName, function (err, data) {
		console.log("file: " + fileName);

		if (err) {
			throw err;
		}

		var text = data.toString();
		console.log(text + '\n');
	});
}