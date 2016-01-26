var deleteListOfFiles = require('./deleteListOfFiles');
var getFilesByExtension = require('./getFilesByExtension');

if(process.argv[2] === undefined) {
  console.log("usage: node src/app.js <path> <extension>");
  return;
}

var path = process.argv[2];
var extension = process.argv[3];

console.log("path: " + path);
console.log("extension: " + extension);

getFilesByExtension(path, extension, function(filePaths) {
  deleteListOfFiles(filePaths);
});