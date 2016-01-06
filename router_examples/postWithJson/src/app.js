var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.post('/samplePostRequest2',
	bodyParser.json(), // here, we decide to use the JSON body parser just for this one route
	function (request, response) {
		response.send('data received: ' + JSON.stringify(request.body) + '\n');
	}
);

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});