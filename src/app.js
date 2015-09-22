var express = require('express');
var exampleRoute = require('./routes/example');

var app = express();

app.set('port', 3000);

app.use('/myFirstRoute', exampleRoute);

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
});