var fs = require('fs');

function getFilesByExtension(path, extension, callback) {
  fs.readdir(path, function(err, files) {
    if(files === undefined) {
      console.log("no files found in directory: " + path);
      return;
    }

    var filePaths = [];
    files.forEach(function(file) {
      if (file.split(".").pop() === extension) {
        filePaths.push(path + '/' + file);
      }
    });

    callback(filePaths);
  });
}

module.exports = getFilesByExtension;