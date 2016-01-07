var express = require('express');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index');
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});