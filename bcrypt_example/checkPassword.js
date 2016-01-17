var fs = require('fs');
var bcrypt = require('bcrypt');

fs.readFile('file.txt', function(err, data) {
  bcrypt.compare(process.argv[2], data.toString(), function(err, result) {
    if (err !== undefined) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});