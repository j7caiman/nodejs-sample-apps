/*
 Read in a file, named "people1.json", which contains a list of people.
 Read in another file, named "people2.json", which contains another list of people.
 After both of these files have been read, write a new file called "peopleComplete.json" which contains a sorted list of all the people from the first two files.

 BONUS:
 Read in N files from a people directory, and merge all of the files in the directory into a peopleComplete.json file
 */


var fs = require('fs');
var Promise = require('promise');

var readFile = Promise.denodeify(fs.readFile);
var readdir = Promise.denodeify(fs.readdir);
var writeFile = Promise.denodeify(fs.writeFile);


// less promisey version. uncomment to test. be sure to comment out the block of code below.

//readdir('people').then(function (filenames) {
//	console.log(filenames);
//
//	var promises = [];
//	for (var i = 0; i < filenames.length; i++) {
//		promises.push(readFile('people/' + filenames[i], 'utf8'));
//	}
//
//	Promise.all(promises).then(function (results) {
//		var mergedPeople = [];
//		for (var i = 0; i < results.length; i++) {
//			var aResult = JSON.parse(results[i]);
//			mergedPeople = mergedPeople.concat(aResult);
//		}
//
//		mergedPeople.sort();
//
//		writeFile('peopleMerged.json', JSON.stringify(mergedPeople));
//	}, function(err) {
//		console.log(err);
//	});
//});


// extra promisey version. note: the code above and the code below do the same thing.
readdir('people')
	.then(function (filenames) {
		console.log(filenames);

		var promises = [];
		for (var i = 0; i < filenames.length; i++) {
			promises.push(readFile('people/' + filenames[i], 'utf8'));
		}

		return promises;
	})
	.then(Promise.all)
	.then(function (results) {
		var mergedPeople = [];
		for (var i = 0; i < results.length; i++) {
			var aResult = JSON.parse(results[i]);
			mergedPeople = mergedPeople.concat(aResult);
		}

		mergedPeople.sort();

		return mergedPeople;
	}, function (err) {
		console.log(err);
	})
	.then(JSON.stringify)
	.then(function(data) {
		writeFile('peopleMerged.json', data);
	});