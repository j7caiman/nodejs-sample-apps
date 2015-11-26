var fs = require('fs');


var fileName = "sample.txt";
fs.readFile(fileName, function (err, data) {
	if (err) {
		if(err.code === 'ENOENT') {
			console.log("file: " + fileName + " doesn't exist, creating...");
			data = "some sample file contents";
			fs.writeFile(fileName, data, function(err) {
				if(err) {
					throw err;
				}

				processFile(data);
			})
		} else {
			throw err;
		}

		return;
	}

	console.log("file: " + fileName + " does exist.");
	processFile(data)
});


function processFile(data) {
	console.log("outputting data: ");
	var text = data.toString();
	console.log(text + '\n');
}