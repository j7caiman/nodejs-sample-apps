var express = require('express');
var fs = require('fs');
var app = express();

app.set('views', 'src/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  fs.readFile('./resources/colors.json', function(err, data) {
    if (err) {
      console.log(err);
    }

    var parsedData = JSON.parse(data);
    console.log(parsedData);
    response.render("index", {
      colors: parsedData.colorsArray
    });
  });
});

var server = app.listen(3000, function() {
  console.log('Example app listening on port: ' + server.address().port);
});