var fs = require('fs');
var bcrypt = require('bcrypt');

var password = process.argv[2]; // get their password from the user registration form
bcrypt.hash(password, 8, function(err, hash) {
  if (err !== undefined) {
    console.log(err);
  } else {
    fs.writeFile("file.txt", hash); // store it in the database
  }
});