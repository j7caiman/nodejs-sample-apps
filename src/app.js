var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/myFirstRoute', function(request, response) {
	response.send('<body><h1>hello everyone!</h1></body>');
});

app.get('/mySecondRoute', function(reuqest, response) {
	response.render('exampleJadeView');
});


app.listen(app.get('port'), function() {
	console.log("node.js app running at localhost:" + app.get('port'))
});