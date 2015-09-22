var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/myFirstRoute', function(request, response) {
	response.send('<body><h1>hello everyone!</h1></body>');
});

app.get('/routeWithParameters', function(request, response) {
	var requestParameters = request.query;
	if(requestParameters.name !== undefined) {
		response.send('<body><h1>hello, ' + requestParameters.name + '!</h1></body>');
	} else {
		response.send('<body><h1>hello, stranger!</h1></body>');
	}
});

app.get('/routeUsingJade', function(request, response) {
	response.render('exampleJadeView');
});


app.listen(app.get('port'), function() {
	console.log("node.js app running at localhost:" + app.get('port'))
});