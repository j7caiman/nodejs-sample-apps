var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

app.post('/createNewTicket',
	bodyParser.urlencoded({extended: true}),
	function (request, response) {
		var filename = request.body.name;
		var contents = request.body.contents;

		fs.writeFile(filename, contents, function(err) {
			if(err) {
				response.send('error: ' + err);
			} else {
				response.send('file: ' + filename + ' written to disk');
			}
		});
	}
);

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});