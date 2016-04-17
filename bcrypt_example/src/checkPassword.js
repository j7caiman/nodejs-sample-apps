var fs = require('fs');
var bcrypt = require('bcrypt');

var password = process.argv[2]; // get their password from the user login form
fs.readFile('file.txt', function(err, data) { // equivalent to getting the user from the database
  bcrypt.compare(password, data.toString(), function(err, result) {
    if (err !== undefined) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});