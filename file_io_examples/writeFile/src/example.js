var fs = require('fs');

var fileContents = "When they kick at your front door" +
	"\nHow you gonna come?" +
	"\nWith your hands on your head" +
	"\nOr on the trigger of your gun" +
	"\nWhen the law break in" +
	"\nHow you gonna go?" +
	"\nShot down on the pavement" +
	"\nOr waiting on death row";

fs.writeFile("./sample.txt", fileContents, function(err) {
	if(err) {
		throw err;
	}
});