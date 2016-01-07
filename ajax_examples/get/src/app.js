var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

app.get('/getSomeWords', function (request, response) {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	fs.readFile('wordlist.json', function (error, data) {
		if (error) {
			response.send(error);
			return;
		}

		var parsedData = JSON.parse(data);
		var words = parsedData.wordList;
		var index1 = getRandomInt(0, words.length);
		var index2 = getRandomInt(0, words.length);
		var index3 = getRandomInt(0, words.length);

		response.send({
			words: [
				words[index1],
				words[index2],
				words[index3]
			]
		});
	});
});

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});