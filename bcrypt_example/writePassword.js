var fs = require('fs');
var bcrypt = require('bcrypt');

bcrypt.hash(process.argv[2], 8, function(err, hash) {
  if (err !== undefined) {
    console.log(err);
  } else {
    fs.writeFile("file.txt", hash);
  }
});