var fs = require('fs');
var Promise = require('promise');

var readFile = Promise.denodeify(fs.readFile);

readFile('./sample.txt', 'utf8').then(
	function(result) {
		console.log("file read successfully: " + result);
	},
	function(error) {
		console.log("looks like an error occurred: " + error);
	}
);
