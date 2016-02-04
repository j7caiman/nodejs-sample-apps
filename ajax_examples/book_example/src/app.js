var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public/images'));
app.use(express.static('public/stylesheets'));
app.use(express.static('public/javascripts'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');
app.set('views', 'src/views');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/getBookContents', function (req, res) {
  var filename = req.query.filename;
  console.log(filename);

  fs.readFile('resources/text/' + filename, function(error, data) {
    if(error) {
      res.send("book not found.");
    } else {
      var formattedString = data.toString();

      res.send(formattedString);
    }
  })
});

app.post('/like', function (req, res) {
  function writeLikeFileAndSendResponse(contents) {
    fs.writeFile("resources/likes.json", JSON.stringify(contents), function(error) {
      if(error) {
        throw error;
      }

      res.send();
    });
  }

  var likedBookName = req.body.filename;
  fs.readFile("resources/likes.json", function(error, data) {
    if(error) {
      if(error.code === 'ENOENT') {
        var contents = {};
        contents[likedBookName] = 1;

        writeLikeFileAndSendResponse(contents);
      } else {
        throw error;
      }
    } else {
      var contents = JSON.parse(data);
      if(contents[likedBookName] === undefined) {
        contents[likedBookName] = 1;
      } else {
        contents[likedBookName] = contents[likedBookName] + 1;
      }

      writeLikeFileAndSendResponse(contents);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});