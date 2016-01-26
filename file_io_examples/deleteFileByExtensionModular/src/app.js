var deleteListOfFiles = require('./deleteListOfFiles');
var getFilesByExtension = require('./getFilesByExtension');

var path = process.argv[2];
var extension = process.argv[3];

if (path === undefined || extension === undefined) {
  console.log("usage: node src/app.js <path> <extension>");
  return;
}

console.log("path: " + path);
console.log("extension: " + extension);

getFilesByExtension(path, extension, function(filesList) {
  deleteListOfFiles(filesList);
});