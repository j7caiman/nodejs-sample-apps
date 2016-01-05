var fs = require('fs');
var Promise = require('promise');

var readFile = Promise.denodeify(fs.readFile);

readFile('./sample.json', 'utf8')
	.then(JSON.parse, console.log)
	.then(function (parsedResult) {
		console.log("printing out a specific value: " + parsedResult.sample_key);
	}
);