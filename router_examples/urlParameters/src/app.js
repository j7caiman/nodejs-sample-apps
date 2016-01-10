var express = require('express');
var app = express();

app.get('/pickle/:apple/:orange', function (request, response) {
	var requestParameters = request.params;
	console.log(requestParameters);
	response.send('<strong>apple:</strong> ' + requestParameters.apple + '<br/><strong>orange:</strong> ' + requestParameters.orange);
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});