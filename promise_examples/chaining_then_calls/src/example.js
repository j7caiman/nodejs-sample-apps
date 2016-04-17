var fs = require('fs');
var Promise = require('promise');

var readFile = Promise.denodeify(fs.readFile);

readFile('./sample.json', 'utf8')
	.then(function(data) {
		return JSON.parse(data);
	}, function(err) {
		console.log('there was an error: ' + err);
	})
	.then(function (parsedResult) {
		console.log("printing out a specific value: " + parsedResult.sample_key);
	}
);