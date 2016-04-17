var fs = require('fs');

fs.readFile('./sample.txt', 'utf8', function (err, data) {
	if (err) {
		console.log("looks like an error occurred: " + err);
		throw err;
	}

	console.log("file read successfully:");
	console.log(data);
});