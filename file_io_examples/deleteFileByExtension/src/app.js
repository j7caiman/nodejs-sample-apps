var fs = require('fs');


var path = process.argv[2];
var extension = process.argv[3];

if (path === undefined || extension === undefined) {
  console.log("usage: node src/app.js <path> <extension>");
  return;
}

console.log("path: " + path);
console.log("extension: " + extension);

fs.readdir(path, function(err, files) {
  if (files === undefined) {
    console.log("no files found in directory: " + path);
    return;
  }

  var filePaths = [];
  files.forEach(function(file) {
    if (file.split(".").pop() === extension) {
      filePaths.push(path + '/' + file);
    }
  });

  if (filePaths.length === 0) {
    console.log("no files in directory: " + path + " match extension: " + extension);
    return;
  }

  filePaths.forEach(function(file) {
    fs.unlink(file, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(file + " deleted successfully.");
      }
    });
  });
});