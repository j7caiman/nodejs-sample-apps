var express = require('express');
var app = express();

app.get('/routeWithParameters', function(request, response) {
	var requestParameters = request.query;
	if(requestParameters.name !== undefined) {
		response.send('<body><h1>hello, ' + requestParameters.name + '!</h1></body>');
	} else {
		response.send('<body><h1>hello, stranger!</h1></body>');
	}
});

var server = app.listen(3000);